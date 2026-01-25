export function WhatsAppButton() {
  // Use wa.me link without the '+' sign
  const href = 'https://wa.me/966537665619'

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat on WhatsApp'
      className={
        'fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg ring-2 ring-white dark:ring-neutral-900 transition-transform transform hover:-translate-y-1'
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='0'
        width='28'
        height='28'
        aria-hidden='true'
      >
        <path
          fill='currentColor'
          d='M20.52 3.48A11.94 11.94 0 0 0 12 0C5.373 0 .002 5.373 0 12c0 2.11.55 4.09 1.6 5.84L0 24l6.43-1.69A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.15-3.48-8.52zM12 21.5c-1.87 0-3.62-.5-5.16-1.43l-.37-.22L4 20l1.15-2.49-.24-.39A9.5 9.5 0 0 1 2.5 12 9.5 9.5 0 0 1 12 2.5c5.25 0 9.5 4.25 9.5 9.5S17.25 21.5 12 21.5z'
        />
        <path
          fill='white'
          d='M17.5 14.1c-.3-.15-1.75-.87-2.02-.98-.27-.11-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.29.3-.48.1-.19.05-.35-.03-.5-.08-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.5.07-.76.35-.26.28-1 1-1 2.45s1.03 2.85 1.17 3.04c.14.19 2.03 3.1 4.92 4.34 1.78.77 2.78.98 3.76.79.98-.19 1.75-.79 2-.99.25-.2.77-.97.88-1.87.11-.9.11-1.67-.78-2.03z'
        />
      </svg>
    </a>
  )
}
