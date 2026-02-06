import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility', () => {
    it('should merge class names correctly', () => {
        const result = cn('text-red-500', 'bg-blue-500');
        expect(result).toBe('text-red-500 bg-blue-500');
    });

    it('should handle conditional classes', () => {
        const result = cn('text-red-500', false && 'bg-blue-500', 'text-lg');
        expect(result).toBe('text-red-500 text-lg');
    });

    it('should merge tailwind classes properly (override)', () => {
        // tailwind-merge should resolve conflict: p-4 overrides p-2
        const result = cn('p-2', 'p-4');
        expect(result).toBe('p-4');
    });
});
