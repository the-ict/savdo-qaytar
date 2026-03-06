import React from 'react'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'

export default function ErrorWidget({
    title = "Something went wrong",
    message = "We couldn't load the content you were looking for. Please try again or head back home.",
    onRetry,
    onHome
}: {
    title?: string;
    message?: string;
    onRetry?: () => void;
    onHome?: () => void;
}) {
    return (
        <div className='flex items-center justify-center h-full w-full min-h-[400px] p-6'>
            <div className='relative flex flex-col items-center max-w-md w-full gap-8 p-12 rounded-3xl glass dark:glass-dark shadow-2xl overflow-hidden border border-white/10 dark:border-white/5'>
                <div className='absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px] rounded-full' />
                <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[100px] rounded-full' />

                <div className='relative flex items-center justify-center'>
                    <div className='absolute inset-0 bg-destructive/20 blur-2xl rounded-full scale-150 animate-pulse' />
                    <div className='relative w-20 h-20 rounded-2xl premium-gradient flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)]'>
                        <AlertCircle className='w-10 h-10 text-white animate-bounce' />
                    </div>
                </div>

                <div className='relative flex flex-col items-center text-center gap-3'>
                    <h2 className='text-2xl font-bold tracking-tight text-foreground/90'>
                        {title}
                    </h2>
                    <p className='text-sm text-muted-foreground leading-relaxed font-medium'>
                        {message}
                    </p>
                </div>

                <div className='relative flex flex-col sm:flex-row items-center gap-3 w-full animate-in fade-in slide-in-from-bottom-4 duration-700'>
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className='flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl premium-gradient text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-primary/25'
                        >
                            <RefreshCw className='w-4 h-4' />
                            Try Again
                        </button>
                    )}
                    <button
                        onClick={onHome}
                        className='flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl glass dark:glass-dark border border-border/50 text-foreground/80 font-semibold text-sm transition-all hover:bg-muted/50 hover:scale-[1.02] active:scale-[0.98]'
                    >
                        <Home className='w-4 h-4' />
                        Go Home
                    </button>
                </div>

                <div className='relative mt-2'>
                    <span className='text-[10px] text-muted-foreground/50 font-bold uppercase tracking-[0.2em]'>
                        FX Replay Support
                    </span>
                </div>
            </div>
        </div>
    )
}
