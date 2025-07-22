interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-stone-600">{subtitle}</p>}
    </div>
  )
}
