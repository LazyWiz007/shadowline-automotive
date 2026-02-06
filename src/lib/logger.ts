type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
    private isDev = process.env.NODE_ENV === 'development';

    private log(level: LogLevel, message: string, meta?: Record<string, unknown>) {
        if (!this.isDev && level === 'debug') return;

        const timestamp = new Date().toISOString();
        const payload = {
            timestamp,
            level,
            message,
            ...meta
        };

        // In a real app, you'd send this to Sentry/Datadog/etc.
        switch (level) {
            case 'error':
                console.error(JSON.stringify(payload));
                break;
            case 'warn':
                console.warn(JSON.stringify(payload));
                break;
            case 'info':
                console.log(JSON.stringify(payload));
                break;
            case 'debug':
                console.debug(JSON.stringify(payload));
                break;
        }
    }

    info(message: string, meta?: Record<string, unknown>) {
        this.log('info', message, meta);
    }

    warn(message: string, meta?: Record<string, unknown>) {
        this.log('warn', message, meta);
    }

    error(message: string, meta?: Record<string, unknown>) {
        this.log('error', message, meta);
    }

    debug(message: string, meta?: Record<string, unknown>) {
        this.log('debug', message, meta);
    }
}

export const logger = new Logger();
