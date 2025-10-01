/**
 * Função de teste para verificar se o cliente Sanity está funcionando
 */
import { client } from './sanity'

export async function testSanityConnection() {
  try {
    console.log('🔧 Testando conexão com Sanity...')
    console.log('📋 Configuração do cliente:', {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      apiVersion: client.config().apiVersion,
      useCdn: client.config().useCdn
    })

    // Teste básico - buscar documentos
    const result = await client.fetch('*[_type == "profile"][0]')

    if (result) {
      console.log('✅ Conexão com Sanity funcionando!', result)
      return { success: true, data: result }
    } else {
      console.log('⚠️ Sanity conectado, mas sem dados de perfil')

      // Vamos verificar se existem outros tipos de documento
      const documentTypes = await client.fetch('count(*)')
      console.log('📊 Total de documentos no Sanity:', documentTypes)

      const types = await client.fetch('array::unique(*[defined(_type)]._type)')
      console.log('📋 Tipos de documentos disponíveis:', types)

      return { success: true, data: null, message: 'Sem dados de perfil', documentCount: documentTypes, availableTypes: types }
    }
  } catch (error) {
    console.error('❌ Erro na conexão com Sanity:', error)

    // Vamos tentar identificar o tipo de erro
    let errorInfo = {
      message: error.message,
      status: error.status,
      statusCode: error.statusCode,
      type: 'unknown'
    }

    if (error.message.includes('project')) {
      errorInfo.type = 'project_not_found'
      errorInfo.suggestion = 'Verifique se o Project ID está correto em sanity.io/manage'
    } else if (error.message.includes('Unauthorized') || error.message.includes('403')) {
      errorInfo.type = 'unauthorized'
      errorInfo.suggestion = 'Verifique as configurações de CORS no projeto Sanity'
    } else if (error.message.includes('network') || error.message.includes('fetch')) {
      errorInfo.type = 'network'
      errorInfo.suggestion = 'Verifique sua conexão com a internet'
    }

    return { success: false, error: errorInfo }
  }
}
