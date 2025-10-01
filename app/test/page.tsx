import { testSanityConnection } from '@/lib/sanity-test'

export default async function TestPage() {
  const testResult = await testSanityConnection()

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Teste de Conexão Sanity</h1>
      <pre>{JSON.stringify(testResult, null, 2)}</pre>
    </div>
  )
}
