export default function Container({ as: Element = "div", children, className = "", ...props }) {
  return <Element className={`page-container ${className}`} {...props}>{children}</Element>;
}