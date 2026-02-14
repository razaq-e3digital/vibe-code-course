'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function WaitlistForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Something went wrong');

            setStatus('success');
            setMessage(data.message || 'You are on the list!');
            setFormData({ firstName: '', lastName: '', email: '', phone: '' });
        } catch (error: any) {
            setStatus('error');
            setMessage(error.message);
        }
    };

    return (
        <section id="waitlist" className="py-24 px-4 bg-black relative">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">Secure your spot in the future of coding.</h2>
                    <p className="text-gray-400 mb-12">
                        Join 3,000+ others on the waitlist. We release invites in batches.
                    </p>

                    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-2xl max-w-xl mx-auto space-y-4 shadow-2xl backdrop-blur-sm">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                required
                                value={formData.firstName}
                                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                required
                                value={formData.lastName}
                                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 w-full"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 w-full"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 w-full"
                        />

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? <Loader2 className="animate-spin" /> :
                                status === 'success' ? <CheckCircle /> : 'Join Waitlist'}
                        </button>

                        {message && (
                            <div className={`mt-4 text-sm flex items-center justify-center gap-2 ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                                {status === 'error' && <AlertCircle className="w-4 h-4" />}
                                {message}
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
