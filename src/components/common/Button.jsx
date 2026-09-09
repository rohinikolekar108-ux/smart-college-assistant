export default function Button({ children, className = '', ...props }) {
  return <button className={`app-button ${className}`} {...props}>{children}</button>
}
