---
name: Refactor Request
about: >
    Commits que reorganizam ou melhoram o código existente sem alterar seu comportamento externo.
    Exemplo: extrair métodos, reorganizar a estrutura de arquivos ou melhorar a legibilidade do código.
title: '[refactor]:'
labels: ['refactor']
assignees: []
---
## Summary

Refatorar a lógica de validação de formulários para utilizar uma abordagem baseada em esquemas em vez de validações manuais.

## Motivation

A lógica atual é difícil de ler e manter. Migrar para `zod` tornará o código mais consistente e fácil de testar.

## Tasks

- [ ] Instalar `zod`
- [ ] Substituir a validação manual por esquemas
- [ ] Atualizar as mensagens de erro
- [ ] Garantir que todos os testes existentes sejam aprovados

## No change in behavior is expected

Nenhuma alteração de comportamento é esperada.