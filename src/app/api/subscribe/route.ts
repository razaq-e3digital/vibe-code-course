import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, phone } = await request.json();

        if (!email || !firstName || !lastName || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const API_KEY = process.env.BREVO_API_KEY;
        const LIST_ID = process.env.BREVO_LIST_ID;

        if (!API_KEY || !LIST_ID) {
            console.error('Brevo API keys missing');
            // In development/demo, we might want to simulate success if keys are missing
            // but for production readyness, we should return error or mock it.
            // For this task, I'll return an error to prompt the user to set keys.
            return NextResponse.json(
                { error: 'Server configuration error (Missing API Keys)' },
                { status: 500 }
            );
        }

        const payload = {
            email,
            attributes: {
                FIRSTNAME: firstName,
                LASTNAME: lastName,
                SMS: phone
            },
            listIds: [parseInt(LIST_ID)],
            updateEnabled: true
        };

        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': API_KEY,
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            // Handle case where user already exists but might be in a different list or just update
            if (data.code === 'duplicate_parameter') {
                return NextResponse.json(
                    { message: 'You are already on the waitlist!' },
                    { status: 200 }
                );
            }
            console.error('Brevo API Error:', data);
            return NextResponse.json(
                { error: 'Failed to add to waitlist. Please try again.' },
                { status: response.status }
            );
        }

        return NextResponse.json(
            { message: 'Successfully joined the waitlist!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
