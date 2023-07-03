interface SVGRProps {
  title?: string
  titleId?: string
  className?: string
}

function SvgOutlineX({ title, titleId, ...props }: SVGRProps): JSX.Element {
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
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}

export default SvgOutlineX
