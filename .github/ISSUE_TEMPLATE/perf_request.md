---
name: Performance Request
about: Commits de refatoração focados em melhorar o desempenho do projeto.
title: '[perf]:'
labels: 'performance'
assignees: ''
---
## Summary

Utilizar carregamento sob demanda e compressão nas imagens do banner da página inicial para melhorar o tempo de carregamento.

## Current Behavior

As imagens são carregadas imediatamente, causando lentidão na renderização inicial.

## Improvement Plan

- [ ] Habilitar carregamento sob demanda para imagens não críticas
- [ ] Comprimir as imagens usando WebP
- [ ] Testar a velocidade de carregamento antes e depois

## Metrics to Watch

- Pontuação de desempenho no Lighthouse
- Tempo de carregamento da página