import React from "react"

interface StatProps {
  value: string
  label: string
}

interface StatsProps {
  metrics?: StatProps[]
}

function StatItem({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-400 mb-2">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export function Stats({ metrics }: StatsProps) {
  if (metrics && metrics.length > 0) {
    return (
      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        {metrics.map((metric, index) => (
          <StatItem key={index} value={metric.value} label={metric.label} />
        ))}
      </div>
    )
  }

  // Fallback para valores padrão
  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-md">
      <StatItem value="3" label="Anos de Experiência" />
      <StatItem value="5+" label="Projetos Completados" />
      <StatItem value="3" label="Clientes Satisfeitos" />
      <StatItem value="6" label="Tecnologias Dominadas" />
    </div>
  )
}
