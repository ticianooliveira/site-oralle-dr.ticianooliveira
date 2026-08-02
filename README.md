# Site Oralle | Dr. Ticiano Oliveira

Site institucional estático, preparado para publicação no GitHub Pages.

## Publicação segura no GitHub

1. Ative autenticação em dois fatores na conta do proprietário e dos colaboradores.
2. Em **Settings → Collaborators**, mantenha somente pessoas conhecidas e dê o menor nível de acesso necessário.
3. Em **Settings → Branches**, crie uma regra para a branch `main`: exigir pull request, impedir force push e impedir exclusão.
4. Em **Settings → Pages**, publique apenas a partir da branch e pasta corretas.
5. Em **Settings → Actions**, selecione a permissão padrão **Read repository contents** quando nenhum fluxo precisar escrever.
6. Não coloque senhas, tokens, arquivos `.env`, dados de pacientes ou documentos internos no repositório.
7. Ative alertas de segurança e a proteção contra envio de segredos nas configurações do repositório, quando disponíveis.

## Como identificar o site oficial sem comprar domínio

O código público pode ser copiado, mas ninguém consegue alterar este repositório sem permissão. Para tornar a identidade oficial verificável:

- divulgue somente o endereço oficial do GitHub Pages no Instagram, WhatsApp Business e Perfil da Empresa no Google;
- ative HTTPS obrigatório no GitHub Pages;
- mantenha os perfis oficiais apontando de volta para o mesmo endereço;
- ative a autenticação em dois fatores no GitHub e proteja a branch `main`.

Não é necessário registrar ou pagar por domínio para testar ou publicar esta versão.

## Teste local

Abra a pasta `site-oralle-codigo-completo` no VS Code. No terminal, execute:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

No Windows, se o comando acima não funcionar, tente:

```bash
py -m http.server 8000
```

## Alterações de desempenho e segurança

- vídeos reduzidos e preparados para carregamento progressivo;
- imagens de procedimentos convertidas para WebP e redimensionadas;
- mídia abaixo da primeira tela carregada apenas quando necessária;
- remoção do JavaScript externo de terceiros;
- política de segurança de conteúdo e política de referência;
- proteção de links externos com `noopener noreferrer`;
- menu responsivo, foco visível, textos alternativos e respeito à redução de movimento;
- metadados de descrição e compartilhamento social.

## Apresentação dos depoimentos

- carrossel com avanço automático e controles por setas e indicadores;
- três avaliações visíveis no computador, duas no tablet e uma no celular;
- suporte a toque e arraste no celular;
- pausa automática durante a interação e respeito à preferência de movimento reduzido.

## Ajustes futuros opcionais

- A imagem social específica para WhatsApp e Instagram ficou reservada para uma etapa futura, conforme solicitado.
- Um domínio próprio poderá ser configurado futuramente, mas não é necessário agora.
