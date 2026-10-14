export type NavegacaoArea = {
  id: string
  titulo: string
  destino: string
}

export type AreaDetalhada = {
  id: string
  navegacaoId: string
  titulo: string
  introducao?: string
  itens: string[]
}

export const navegacaoAreas: NavegacaoArea[] = [
  {
    id: 'familia-e-sucessoes',
    titulo: 'DIREITO DE FAMÍLIA E DAS SUCESSÕES',
    destino: 'direito-de-familia-e-das-sucessoes',
  },
  {
    id: 'imobiliario',
    titulo: 'DIREITO IMOBILIARIO',
    destino: 'direito-imobiliario',
  },
  {
    id: 'registral-e-notarial',
    titulo: 'DIREITO REGISTRAL E NOTARIAL',
    destino: 'direito-notarial-e-registral',
  },
  {
    id: 'urbanistico',
    titulo: 'DIREITO URBANISTICO',
    destino: 'direito-urbanistico',
  },
  {
    id: 'civil',
    titulo: 'DIREITO CIVIL',
    destino: 'direito-civil',
  },
  {
    id: 'extrajudicial',
    titulo: 'EXTRAJUDICIAL',
    destino: 'extrajudicial',
  },
]

export const areasDetalhadas: AreaDetalhada[] = [
  {
    id: 'direito-notarial-e-registral',
    navegacaoId: 'registral-e-notarial',
    titulo: 'Direito Notarial e Registral',
    itens: [
      'Assessoria e consultoria, de registro de títulos perante o Cartorio de Registro de Imóveis;',
      'Elaboração de Instrumentos Contratuais bem como modelos de negócios;',
      'Assessoria e consultoria na confecção de escrituras públicas adequado ao negócio júridico;',
      'Atuação em Procedimentos de Suscitação de Dúvida;',
      'Procedimentos de retificação de área, retificação de registro, entre outros.',
      'Elaboração de pareceres voltados a viabilizar o registro de títulos nas Serventias Imobiliárias;',
    ],
  },
  {
    id: 'extrajudicial',
    navegacaoId: 'extrajudicial',
    titulo: 'Contratos Imobiliários',
    introducao: 'Elaboração de contratos imobiliários envolvendo imóveis, tais como:',
    itens: [
      'Compra e Venda;',
      'Doação',
      'Permuta',
      'Dação em Pagamento',
      'Cessão de Direitos',
      'Divisão Amigável',
      'Venda com reserva de domínio;',
      'Parceria;',
      'Negociação de contratos e cláusulas contratuais;',
      'Alienação Fiduciária;',
      'Hipoteca;',
      'Atuação em demandas envolvendo contratos imobiliários.',
    ],
  },
  {
    id: 'direito-imobiliario',
    navegacaoId: 'imobiliario',
    titulo: 'Direito Imobiliário',
    itens: [
      'Usucapião Extrajudicial',
      'Usucapião Judicial',
      'Adjudicação Compulsória',
      'Assessoria, elaboração, revisão e análise de contratos;',
      'Intermediação em negociações de bens móveis e imóveis;',
      'Ações para fazer cumprir contratos;',
      'Ações para discutir cláusulas contratuais abusivas;',
      'Ações para anular contratos;',
      'Rescisão contratual;',
      'Execução de títulos de crédito (notas promissórias, duplicatas e cheques);',
      'Ações de consignação em pagamento.',
    ],
  },
  {
    id: 'locacoes',
    navegacaoId: 'imobiliario',
    titulo: 'Locações',
    itens: [
      'Ajuizamento e defesa em ações de despejo, revisional de aluguéis, renovatória, execução de contrato de locação, cobrança de aluguéis e encargos, ações rescisórias de contrato de locação;',
      'Elaboração de contratos de locação;',
      'Orientação procedimental em locações;',
      'Negociação de locações, renovações e multas rescisórias;',
    ],
  },
  {
    id: 'direito-tributario-imobiliario',
    navegacaoId: 'imobiliario',
    titulo: 'Direito Tributário Imobiliário',
    itens: [
      'Questionamento administrativo de alíquotas e dívidas de IPTU/TRS;',
      'Defesa em execuções fiscais fundadas em cobrança de IPTU/TRS/ITBI/ITCD;',
      'Procedimentos para isenção de IBTI quando cabível;',
      'Atuação em procedimentos de declaração de ITCD com o foco na legítima redução do valor do tributo;',
      'Recursos contra as avaliações da receita estadual nos processos de ITCD;',
      'Consultoria tributária para redução da incidência do Imposto de Renda sobre Lucro Imobiliário;',
    ],
  },
  {
    id: 'direito-urbanistico',
    navegacaoId: 'urbanistico',
    titulo: 'Documentação Imobiliária',
    itens: [
      'CND do INSS;',
      'Habite-se;',
      'CEI da obra;',
      'Escritura pública (confecção e registro);',
      'Abertura de matrícula (Registro de Imóveis);',
      'Averbação de Construção;',
      'Regularização de construções;',
      'Baixa de cláusulas de inalienabilidade/incomunicabilidade;',
      'Cancelamento de Usufruto',
      'Averbações na matrícula (Registro de Imóveis)',
      'Permuta;',
      'Suscitação de dúvida',
      'Redução de ITBI (mudança de base de cálculo por meio de procedimento administrativo);',
      'Consultoria, assessoria perante o Registro de Imóveis;',
      'Concepção de modelos de negócios e elaboração dos instrumentos contratuais;',
      'Elaboração de pareceres voltados a viabilizar o registro de títulos nas serventias imobiliárias;',
      'Atuação em procedimentos de suscitação de dúvida;',
      'Atuação em procedimentos de retificação de área, retificação de registro e afins.',
    ],
  },
  {
    id: 'direito-de-familia-e-das-sucessoes',
    navegacaoId: 'familia-e-sucessoes',
    titulo: 'Direito de Família/Sucessões',
    itens: [
      'Divórcio Judicial;',
      'Separação Judicial;',
      'Divórcio ou Separação Extrajudicial (Cartório);',
      'Contrato de União Estável;',
      'Ação Declaratória de União Estável;',
      'Reconhecimento e Dissolução de União Estável (Judicial ou Extrajudicial);',
      'Partilha de Bens;',
      'Alteração de Regime de Bens;',
      'Investigação de Paternidade;',
      'Regulamentação de visitas dos pais;',
      'Pensão Alimentícia (fixação, oferta, revisão e exoneração);',
      'Ação de guarda (compartilhada ou unilateral);',
      'Execução de Alimentos;',
      'Interdição de Incapaz (curatela);',
      'Destituição de Poder Familiar;',
      'Alienação Parental;',
      'Elaboração de Pacto Antenupcial',
      'Adoção.',
      'Inventário Extrajudicial',
      'Inventário Judicial',
      'Intermediação de acordos entre herdeiros;',
      'Imposto decorrente do falecimento: ITCMD (apuração e acompanhamento do processo administrativo);',
      'Recurso administrativo contra avaliação de bens no ITCMD pela Receita Estadual;',
      'Ação Judicial contra avaliação incorreta de bens no ITCMD pela Receita Estadual;',
      'Testamento (Elaboração e Acompanhamento);',
      'Habilitação em Inventário (Herdeiros e Credores);',
      'Sobrepartilha Judicial;',
      'Sobrepartilha Extrajudicial;',
      'Doações;',
      'Planejamento Sucessório;',
      'Deserdação.',
      'Assessoria Jurídica em Retificações (Nascimento/Casamento/Óbito)',
      'Assessoria Jurídica (Alteração de prenome/gênero/sobrenome)',
      'Reconhecimento de Paternidade',
      'Reconhecimento de Paternidade Sócio Afetivo',
    ],
  },
  {
    id: 'direito-civil',
    navegacaoId: 'civil',
    titulo: 'Responsabilidade Civil Imobiliária',
    itens: [
      'Negociação de reparação por vícios em imóveis, sejam ocultos ou supervenientes;',
      'Ajuizamento e atuação em ações indenizatórias ou rescisórias decorrentes desses vícios;',
      'Aplicação de entendimentos jurídicos modernos na concepção de formas de pleitear reparação por danos mesmo decorridos mais de 5 anos da assinatura do contrato e entrega do imóvel;',
    ],
  },
]
