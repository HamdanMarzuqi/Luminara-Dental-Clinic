import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Shared modal accessibility behavior: locks body scroll, closes on Escape,
 * traps Tab focus within the modal, auto-focuses the first field on open,
 * and restores focus to the previously focused element on close.
 *
 * Returns a ref that must be attached to the modal's outer container.
 */
export function useModalA11y(isOpen, onClose) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const previouslyFocused = document.activeElement;

    const getFocusable = () =>
      containerRef.current ? Array.from(containerRef.current.querySelectorAll(FOCUSABLE_SELECTOR)) : [];

    // Auto-focus the first focusable element once the modal has rendered.
    const focusTimer = window.setTimeout(() => {
      getFocusable()[0]?.focus();
    }, 0);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isOpen, onClose]);

  return containerRef;
}
