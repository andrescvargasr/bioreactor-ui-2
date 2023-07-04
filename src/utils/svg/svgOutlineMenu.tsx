interface SVGProps {
  title?: string
  titleId?: string
  className?: string
}

function SvgOutlineMenu({ title, titleId, ...props }: SVGProps): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      width='1em'
      height='1em'
      aria-labelledby={titleId}
      {...props}
    >
      {title ?? <title id={titleId}>{title}</title>}
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}

export default SvgOutlineMenu