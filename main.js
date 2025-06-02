// ======= DADOS REAIS =======
const dadosMateriais = [
  {"descricao":"Brita Graduada Usinada Posto Obra","unidade":"m","grupo":"Agregados e Britas","quantidade":138.0,"preco_unitario":9212.52,"preco_total":1271327.83},
  {"descricao":"Pedra De Mão (Rachão)","unidade":"l","grupo":"Agregados e Britas","quantidade":205684.26,"preco_unitario":6.18,"preco_total":1270100.31},
  {"descricao":"Pedra Britada Usinada N° 1 Posto Obra","unidade":"un","grupo":"Agregados e Britas","quantidade":14993.0,"preco_unitario":71.25,"preco_total":1068251.25},
  {"descricao":"Areia Média Lavada (A Granel Caçamba Fechada)","unidade":"m³","grupo":"Agregados e Britas","quantidade":12641.0,"preco_unitario":77.77,"preco_total":983196.61},
  {"descricao":"Areia Média Lavada Ensacada","unidade":"sc","grupo":"Agregados e Britas","quantidade":22727.0,"preco_unitario":42.3,"preco_total":960404.1},
  {"descricao":"Bica Corrida Posto Obra","unidade":"m³","grupo":"Agregados e Britas","quantidade":11442.9,"preco_unitario":82.24,"preco_total":940921.9},
  {"descricao":"Brita Graduada Usinada Posto Britador","unidade":"m","grupo":"Agregados e Britas","quantidade":135.0,"preco_unitario":6646.6,"preco_total":897291.0},
  {"descricao":"Areia Fina Lavada Ensacada","unidade":"sc","grupo":"Agregados e Britas","quantidade":19672.0,"preco_unitario":40.14,"preco_total":789875.09},
  {"descricao":"Areia Grossa","unidade":"m³","grupo":"Agregados e Britas","quantidade":5320.0,"preco_unitario":80.74,"preco_total":429623.4},
  {"descricao":"Concreto Usinado Fck= 15 Mpa, Slump 5 ± 1Cm, Brita 1","unidade":"m³","grupo":"Concreto, Cimento e Argamassa","quantidade":356.0,"preco_unitario":799.63,"preco_total":284867.0},
  {"descricao":"Cimento Portland CP II E 32","unidade":"sc","grupo":"Concreto, Cimento e Argamassa","quantidade":6985.0,"preco_unitario":35.85,"preco_total":250370.25},
  {"descricao":"Vergalhão CA-50 10MM","unidade":"kg","grupo":"Metálicos, Aço e Fixadores","quantidade":20632.0,"preco_unitario":11.39,"preco_total":235005.11},
  {"descricao":"Vergalhão CA-50 8MM","unidade":"kg","grupo":"Metálicos, Aço e Fixadores","quantidade":18672.0,"preco_unitario":11.32,"preco_total":211352.88},
  {"descricao":"Vergalhão CA-50 12,5MM","unidade":"kg","grupo":"Metálicos, Aço e Fixadores","quantidade":11245.0,"preco_unitario":11.45,"preco_total":128724.48},
  {"descricao":"Gasolina Comum","unidade":"l","grupo":"Combustíveis","quantidade":14717.0,"preco_unitario":5.89,"preco_total":86669.12},
  {"descricao":"Hospedagem Diária Padrão Simples","unidade":"un","grupo":"Hospedagem e Refeições","quantidade":2156.0,"preco_unitario":31.38,"preco_total":67655.15},
  {"descricao":"Grama Batatais Em Placas","unidade":"m²","grupo":"Gramados e Vegetação","quantidade":13000.0,"preco_unitario":4.59,"preco_total":59670.0},
  {"descricao":"Pré-Moldado De Concreto","unidade":"un","grupo":"Pré-moldados de Concreto","quantidade":189.0,"preco_unitario":219.58,"preco_total":41500.62},
  {"descricao":"Caibro De Madeira 5X5","unidade":"m","grupo":"Madeiramento e Carpintaria","quantidade":570.0,"preco_unitario":33.2,"preco_total":18924.0},
  {"descricao":"Tábua De Madeira 30Cm X 2,5Cm","unidade":"m","grupo":"Madeiramento e Carpintaria","quantidade":500.0,"preco_unitario":28.6,"preco_total":14300.0},
  {"descricao":"Barra Roscada M12","unidade":"un","grupo":"Metálicos, Aço e Fixadores","quantidade":400.0,"preco_unitario":33.45,"preco_total":13380.0},
  {"descricao":"Tinta Acrílica Fosca Branca (Balde 18L)","unidade":"un","grupo":"Produtos Químicos e Tratamentos","quantidade":240.0,"preco_unitario":53.1,"preco_total":12744.0},
  {"descricao":"Broca Aço Rápido Ø10MM","unidade":"un","grupo":"Ferramentas e Acessórios","quantidade":190.0,"preco_unitario":36.25,"preco_total":6887.5},
  {"descricao":"Cal Hidratada CH-I Embalagem 20KG","unidade":"sc","grupo":"Concreto, Cimento e Argamassa","quantidade":284.0,"preco_unitario":17.2,"preco_total":4884.8},
  {"descricao":"Prego C/ Cabeça 17X27","unidade":"kg","grupo":"Metálicos, Aço e Fixadores","quantidade":259.0,"preco_unitario":9.4,"preco_total":2434.6},
  {"descricao":"Barra De Transferência Ø20MM C/ 50CM","unidade":"un","grupo":"Metálicos, Aço e Fixadores","quantidade":200.0,"preco_unitario":12.15,"preco_total":2430.0},
  {"descricao":"Placa De Sinalização 60X60CM (Tipo Pare)","unidade":"un","grupo":"Sinalização","quantidade":100.0,"preco_unitario":19.8,"preco_total":1980.0},
  {"descricao":"Arame Recozido Nº 18","unidade":"kg","grupo":"Fios, Arames e Telas","quantidade":120.0,"preco_unitario":12.8,"preco_total":1536.0},
  {"descricao":"Fita De Amarração (Rolo 100M)","unidade":"un","grupo":"Metálicos, Aço e Fixadores","quantidade":100.0,"preco_unitario":13.8,"preco_total":1380.0},
  {"descricao":"Carrinho De Mão Reforçado","unidade":"un","grupo":"Ferramentas e Acessórios","quantidade":20.0,"preco_unitario":102.5,"preco_total":2050.0},
  {"descricao":"Fita Zebrada 70MM","unidade":"rolo","grupo":"Sinalização","quantidade":50.0,"preco_unitario":11.3,"preco_total":565.0},
  {"descricao":"Fio De Nylon P/ Roçadeira 2.4MM","unidade":"rolo","grupo":"Fios, Arames e Telas","quantidade":40.0,"preco_unitario":13.95,"preco_total":558.0},
  {"descricao":"Prego C/ Cabeça 18X27","unidade":"kg","grupo":"Metálicos, Aço e Fixadores","quantidade":30.0,"preco_unitario":9.1,"preco_total":273.0},
  {"descricao":"Broxa Dupla P/ Pintura 15CM","unidade":"un","grupo":"Ferramentas e Acessórios","quantidade":30.0,"preco_unitario":8.7,"preco_total":261.0},
  {"descricao":"Cinta De Fixação Com Catraca 5M","unidade":"un","grupo":"Metálicos, Aço e Fixadores","quantidade":20.0,"preco_unitario":11.9,"preco_total":238.0},
  {"descricao":"Luvas De Raspa C/ Reforço","unidade":"par","grupo":"Ferramentas e Acessórios","quantidade":20.0,"preco_unitario":10.5,"preco_total":210.0},
  {"descricao":"Régua De Alumínio P/ Nivelamento 3M","unidade":"un","grupo":"Ferramentas e Acessórios","quantidade":10.0,"preco_unitario":18.6,"preco_total":186.0},
  {"descricao":"Chave De Fenda 1/4\" X 6\"","unidade":"un","grupo":"Ferramentas e Acessórios","quantidade":10.0,"preco_unitario":13.2,"preco_total":132.0},
  {"descricao":"Estopa Industrial Branca","unidade":"kg","grupo":"Ferramentas e Acessórios","quantidade":10.0,"preco_unitario":12.8,"preco_total":128.0},
  {"descricao":"Arame Galvanizado Nº 14","unidade":"kg","grupo":"Fios, Arames e Telas","quantidade":10.0,"preco_unitario":12.5,"preco_total":125.0},
  {"descricao":"Trena De Aço 10M","unidade":"un","grupo":"Ferramentas e Acessórios","quantidade":10.0,"preco_unitario":12.2,"preco_total":122.0},
  {"descricao":"Capacete De Segurança Com Jugular","unidade":"un","grupo":"Componentes Especiais de Obra","quantidade":10.0,"preco_unitario":11.9,"preco_total":119.0},
  {"descricao":"Fita Isolante 19MM X 20M","unidade":"un","grupo":"Fios, Arames e Telas","quantidade":10.0,"preco_unitario":7.5,"preco_total":75.0},
  {"descricao":"Chave Phillips 1/4\" X 6\"","unidade":"un","grupo":"Ferramentas e Acessórios","quantidade":5.0,"preco_unitario":12.4,"preco_total":62.0},
  {"descricao":"Pincel 2\" Cerdas Pretas","unidade":"un","grupo":"Ferramentas e Acessórios","quantidade":5.0,"preco_unitario":9.2,"preco_total":46.0},
  {"descricao":"Fita Veda Rosca 18MM X 50M","unidade":"un","grupo":"Metálicos, Aço e Fixadores","quantidade":5.0,"preco_unitario":6.4,"preco_total":32.0}
];

const dadosEquipamentos = [
  {"descricao":"Caminhão Basculante 6X4 - 14M³","unidade":"unidade","grupo":"Caminhões e Veículos Leves","quantidade":9.0,"preco_unitario":23750.0,"preco_total":213750.0},
  {"descricao":"Caminhão Basculante 6X4 - 16M³","unidade":"unidade","grupo":"Caminhões e Veículos Leves","quantidade":4.0,"preco_unitario":2850.0,"preco_total":11400.0},
  {"descricao":"Caminhão Munck 15 Toneladas","unidade":"unidade","grupo":"Caminhões e Veículos Leves","quantidade":4.0,"preco_unitario":855.0,"preco_total":3420.0},
  {"descricao":"Caminhão Pipa Até Cap. 10.000Lts - Água Bruta","unidade":"unidade","grupo":"Caminhões e Veículos Leves","quantidade":5.0,"preco_unitario":25090.64,"preco_total":125453.2},
  {"descricao":"Veículo Leve","unidade":"unidade","grupo":"Caminhões e Veículos Leves","quantidade":2.0,"preco_unitario":38000.0,"preco_total":76000.0},
  {"descricao":"Ônibus","unidade":"unidade","grupo":"Caminhões e Veículos Leves","quantidade":3.0,"preco_unitario":1140.0,"preco_total":3420.0},
  {"descricao":"Comboio","unidade":"unidade","grupo":"Caminhões e Veículos Leves","quantidade":1.0,"preco_unitario":20900.0,"preco_total":20900.0},
  {"descricao":"Escavadeira Hidráulica 20 Ton","unidade":"unidade","grupo":"Máquinas Pesadas de Terraplenagem","quantidade":1.0,"preco_unitario":1425.0,"preco_total":1425.0},
  {"descricao":"Motoniveladora","unidade":"unidade","grupo":"Máquinas Pesadas de Terraplenagem","quantidade":2.0,"preco_unitario":20900.0,"preco_total":41800.0},
  {"descricao":"Retroescavadeira 580H","unidade":"unidade","grupo":"Máquinas Pesadas de Terraplenagem","quantidade":1.0,"preco_unitario":28500.0,"preco_total":28500.0},
  {"descricao":"Trator De Esteiras","unidade":"unidade","grupo":"Máquinas Pesadas de Terraplenagem","quantidade":1.0,"preco_unitario":19900.0,"preco_total":19900.0},
  {"descricao":"Rolo Compactador Liso","unidade":"unidade","grupo":"Compactação e Vibração","quantidade":2.0,"preco_unitario":17250.0,"preco_total":34500.0},
  {"descricao":"Rolo Compactador Pé De Carneiro","unidade":"unidade","grupo":"Compactação e Vibração","quantidade":1.0,"preco_unitario":22500.0,"preco_total":22500.0},
  {"descricao":"Rolo Compactador Tándem Vibratório","unidade":"unidade","grupo":"Compactação e Vibração","quantidade":1.0,"preco_unitario":19200.0,"preco_total":19200.0},
  {"descricao":"Placa Vibratória Reversível","unidade":"unidade","grupo":"Compactação e Vibração","quantidade":1.0,"preco_unitario":1900.0,"preco_total":1900.0},
  {"descricao":"Soprador Costal","unidade":"unidade","grupo":"Ferramentas e Oficina","quantidade":1.0,"preco_unitario":1465.0,"preco_total":1465.0},
  {"descricao":"Roçadeira Costal","unidade":"unidade","grupo":"Ferramentas e Oficina","quantidade":1.0,"preco_unitario":1650.0,"preco_total":1650.0},
  {"descricao":"Moto Esmeril De Bancada","unidade":"unidade","grupo":"Ferramentas e Oficina","quantidade":1.0,"preco_unitario":910.0,"preco_total":910.0},
  {"descricao":"Gerador 70 Kva Silenciado","unidade":"unidade","grupo":"Solda, Corte e Geração","quantidade":1.0,"preco_unitario":25800.0,"preco_total":25800.0},
  {"descricao":"Gerador Portátil 7 Kva","unidade":"unidade","grupo":"Solda, Corte e Geração","quantidade":1.0,"preco_unitario":5600.0,"preco_total":5600.0},
  {"descricao":"Máquina De Solda Elétrica 300A","unidade":"unidade","grupo":"Solda, Corte e Geração","quantidade":1.0,"preco_unitario":3050.0,"preco_total":3050.0},
  {"descricao":"Inversora De Solda 200A","unidade":"unidade","grupo":"Solda, Corte e Geração","quantidade":1.0,"preco_unitario":1860.0,"preco_total":1860.0},
  {"descricao":"Serra Circular De Bancada","unidade":"unidade","grupo":"Ferramentas e Oficina","quantidade":1.0,"preco_unitario":1590.0,"preco_total":1590.0},
  {"descricao":"Furadeira De Bancada","unidade":"unidade","grupo":"Ferramentas e Oficina","quantidade":1.0,"preco_unitario":1240.0,"preco_total":1240.0},
  {"descricao":"Betoneira 400L","unidade":"unidade","grupo":"Concretagem e Mistura","quantidade":2.0,"preco_unitario":4600.0,"preco_total":9200.0},
  {"descricao":"Misturador De Argamassa","unidade":"unidade","grupo":"Concretagem e Mistura","quantidade":1.0,"preco_unitario":2350.0,"preco_total":2350.0},
  {"descricao":"Carregadeira De Esteiras","unidade":"unidade","grupo":"Máquinas Pesadas de Terraplenagem","quantidade":1.0,"preco_unitario":21100.0,"preco_total":21100.0},
  {"descricao":"Rompedor Hidráulico P/ Escavadeira","unidade":"unidade","grupo":"Máquinas Pesadas de Terraplenagem","quantidade":1.0,"preco_unitario":19900.0,"preco_total":19900.0},
  {"descricao":"Conjunto De Iluminação Portátil","unidade":"unidade","grupo":"Equipamentos Auxiliares","quantidade":2.0,"preco_unitario":1480.0,"preco_total":2960.0},
  {"descricao":"Cortadora De Piso 18HP","unidade":"unidade","grupo":"Ferramentas e Oficina","quantidade":1.0,"preco_unitario":4800.0,"preco_total":4800.0},
  {"descricao":"Compressor De Ar 100 Pés","unidade":"unidade","grupo":"Equipamentos Auxiliares","quantidade":1.0,"preco_unitario":18400.0,"preco_total":18400.0},
  {"descricao":"Compactador De Percussão Tipo Sapo","unidade":"unidade","grupo":"Compactação e Vibração","quantidade":1.0,"preco_unitario":4780.0,"preco_total":4780.0},
  {"descricao":"Vibrador De Imersão","unidade":"unidade","grupo":"Concretagem e Mistura","quantidade":1.0,"preco_unitario":960.0,"preco_total":960.0},
  {"descricao":"Pulverizador Costal 20L","unidade":"unidade","grupo":"Equipamentos Auxiliares","quantidade":2.0,"preco_unitario":435.0,"preco_total":870.0},
  {"descricao":"Bomba Submersível 2\"","unidade":"unidade","grupo":"Equipamentos Auxiliares","quantidade":1.0,"preco_unitario":720.0,"preco_total":720.0},
  {"descricao":"Engate Rápido P/ Mangueira 1\"","unidade":"unidade","grupo":"Equipamentos Auxiliares","quantidade":10.0,"preco_unitario":35.0,"preco_total":350.0},
  {"descricao":"Mangueira Cristal 1\"","unidade":"m","grupo":"Equipamentos Auxiliares","quantidade":30.0,"preco_unitario":9.6,"preco_total":288.0},
  {"descricao":"Mangote P/ Vibrador De Imersão","unidade":"unidade","grupo":"Concretagem e Mistura","quantidade":1.0,"preco_unitario":560.0,"preco_total":560.0},
  {"descricao":"Carrinho P/ Transporte De Gás","unidade":"unidade","grupo":"Equipamentos Auxiliares","quantidade":2.0,"preco_unitario":325.0,"preco_total":650.0}
];
// =================== INÍCIO DO JS COMPLETO ===================

let precosPraticadosMateriais = {};
let precosPraticadosEquipamentos = {};

// FORMATAÇÃO E PARSES
function formatarNumero(valor) {
  return Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function formatarDinheiro(valor) {
  return 'R$ ' + formatarNumero(valor);
}
function parseNumeroBR(valor) {
  if (valor == null || valor === "") return NaN;
  if (typeof valor === "number") return valor;
  return parseFloat(valor.toString().replace(/\./g, '').replace(',', '.'));
}
function arredondar2(valor) {
  return Math.round((valor + Number.EPSILON) * 100) / 100;
}

// CURVA ABC E NOVO VALOR
function calcularABC(dados, chaveValor) {
  let total = dados.reduce((soma, item) => soma + parseNumeroBR(item[chaveValor]), 0);
  let ordenado = [...dados].sort((a, b) => parseNumeroBR(b[chaveValor]) - parseNumeroBR(a[chaveValor]));
  let acumulado = 0;
  return ordenado.map(item => {
    let valor = parseNumeroBR(item[chaveValor]);
    let percentual = total ? (valor / total) * 100 : 0;
    acumulado += percentual;
    let classe = acumulado <= 80 ? "A" : acumulado <= 95 ? "B" : "C";
    return {
      ...item,
      valor: valor,
      acumulado: acumulado,
      classe: classe
    };
  });
}
function dadosComNovoValorTotal(dadosOriginais, precosPraticados) {
  return dadosOriginais.map(item => {
    let precoPraticado = precosPraticados[item.descricao];
    let novoValor;
    if (precoPraticado == null || precoPraticado === "") {
      novoValor = parseNumeroBR(item.preco_total);
    } else {
      novoValor = arredondar2(parseNumeroBR(precoPraticado) * parseNumeroBR(item.quantidade));
    }
    return { ...item, novo_valor_total: novoValor };
  });
}

// TABELAS DE COMPRA
function preencherTabela(idTabela, dados) {
  const tbody = document.querySelector(`#${idTabela} tbody`);
  if (!tbody) return;
  tbody.innerHTML = '';

  // ORDENAR pelo maior preco_total para equipamentos
  if (idTabela === 'equipamentos-compras') {
    dados = [...dados].sort((a, b) => parseNumeroBR(b.preco_total) - parseNumeroBR(a.preco_total));
  }

  const precosPraticados = (idTabela === 'materiais-compras') ? precosPraticadosMateriais : precosPraticadosEquipamentos;
  dados.forEach(item => {
    const valorInput = precosPraticados[item.descricao] !== undefined ? precosPraticados[item.descricao] : '';
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.descricao}</td>
      <td class="text-center">${formatarNumero(parseNumeroBR(item.quantidade))}</td>
      <td class="text-center">${item.unidade}</td>
      <td class="text-center">${formatarDinheiro(parseNumeroBR(item.preco_unitario))}</td>
      <td class="text-center">${formatarDinheiro(parseNumeroBR(item.preco_total))}</td>
      <td class="text-center">
        <input type="text" class="form-control text-center"
          value="${valorInput}"
          oninput="salvarPrecoPraticado('${idTabela}', '${item.descricao.replace(/'/g, "\\'")}', this.value); calcularDiferenca(this); destacarEdit(this); calcularNovoTotal(this); atualizarResumoCards('${idTabela}');">
      </td>
      <td class="novo-total text-center"></td>
      <td class="dif-valor text-center"></td>
      <td class="dif-percentual text-center"></td>`;
    tbody.appendChild(row);

    setTimeout(() => {
      const input = row.querySelector('input');
      if (valorInput !== '' && input) {
        calcularDiferenca(input);
        destacarEdit(input);
        calcularNovoTotal(input);
      } else if (input) {
        calcularNovoTotal(input);
      }
    }, 0);
  });
  atualizarResumoCards(idTabela);
}

function salvarPrecoPraticado(idTabela, descricao, valor) {
  if (idTabela === 'materiais-compras') {
    precosPraticadosMateriais[descricao] = valor;
  } else {
    precosPraticadosEquipamentos[descricao] = valor;
  }
}
function destacarEdit(input) {
  const row = input.closest('tr');
  row.classList.add('highlight-edit');
}
function calcularNovoTotal(input) {
  const row = input.closest('tr');
  const qtd = parseNumeroBR(row.children[1].innerText);
  const precoPraticado = parseNumeroBR(input.value);
  const celulaNovoTotal = row.querySelector('.novo-total');
  const precoTotal = row.children[4].innerText;
  if (!isNaN(qtd) && !isNaN(precoPraticado)) {
    const total = arredondar2(qtd * precoPraticado);
    celulaNovoTotal.textContent = formatarDinheiro(total);
  } else {
    celulaNovoTotal.textContent = precoTotal;
  }
}
function atualizarResumoCards(idTabela) {
  let filtrados, precosPraticados, elTotal, elNovo, elDifReais, elDifPct;
  if (idTabela === 'materiais-compras') {
    const grupo = document.getElementById('filtroGrupoMateriais').value;
    filtrados = grupo === 'todos' ? dadosMateriais : dadosMateriais.filter(i => i.grupo === grupo);
    precosPraticados = precosPraticadosMateriais;
    elTotal = document.getElementById('cardTotalPrecoMateriais');
    elNovo = document.getElementById('cardNovoTotalMateriais');
    elDifReais = document.getElementById('cardDiferencaReaisMateriais');
    elDifPct = document.getElementById('cardDiferencaPctMateriais');
  } else {
    const grupo = document.getElementById('filtroGrupoEquipamentos').value;
    filtrados = grupo === 'todos' ? dadosEquipamentos : dadosEquipamentos.filter(i => i.grupo === grupo);
    precosPraticados = precosPraticadosEquipamentos;
    elTotal = document.getElementById('cardTotalPrecoEquipamentos');
    elNovo = document.getElementById('cardNovoTotalEquipamentos');
    elDifReais = document.getElementById('cardDiferencaReaisEquipamentos');
    elDifPct = document.getElementById('cardDiferencaPctEquipamentos');
  }
  let somaPrecoTotal = 0;
  let somaNovoTotal = 0;
  filtrados.forEach(item => {
    const precoInput = precosPraticados[item.descricao];
    somaPrecoTotal += parseNumeroBR(item.preco_total);
    if (precoInput == null || precoInput === '') {
      somaNovoTotal += parseNumeroBR(item.preco_total);
    } else {
      somaNovoTotal += arredondar2(parseNumeroBR(precoInput) * parseNumeroBR(item.quantidade));
    }
  });
  somaPrecoTotal = arredondar2(somaPrecoTotal);
  somaNovoTotal = arredondar2(somaNovoTotal);
  const diferencaReais = arredondar2(somaNovoTotal - somaPrecoTotal);
  const diferencaPct = somaPrecoTotal !== 0 ? arredondar2((diferencaReais / somaPrecoTotal) * 100) : 0;

  if (elTotal) elTotal.textContent = formatarDinheiro(somaPrecoTotal);
  if (elNovo) elNovo.textContent = formatarDinheiro(somaNovoTotal);
  if (elDifReais) {
    elDifReais.textContent = (diferencaReais >= 0 ? '+ ' : '- ') + formatarDinheiro(Math.abs(diferencaReais));
    elDifReais.style.color = diferencaReais > 0 ? '#198754' : diferencaReais < 0 ? '#dc3545' : '#212529';
  }
  if (elDifPct) {
    elDifPct.textContent = (diferencaPct >= 0 ? '+ ' : '- ') + formatarNumero(Math.abs(diferencaPct)) + '%';
    elDifPct.style.color = diferencaPct > 0 ? '#198754' : diferencaPct < 0 ? '#dc3545' : '#212529';
  }
}
function calcularDiferenca(input) {
  const row = input.closest('tr');
  const precoUnitario = parseNumeroBR(row.children[3].innerText.replace('R$', '').trim());
  const precoPraticado = parseNumeroBR(input.value);
  const celulaValor = row.querySelector('.dif-valor');
  const celulaPercentual = row.querySelector('.dif-percentual');
  celulaValor.classList.remove('dif-positivo', 'dif-negativo');
  celulaPercentual.classList.remove('dif-positivo', 'dif-negativo');
  if (!isNaN(precoPraticado)) {
    const diferenca = arredondar2(precoPraticado - precoUnitario);
    const percentual = arredondar2((diferenca / precoUnitario) * 100);
    celulaValor.textContent = formatarDinheiro(diferenca);
    celulaPercentual.textContent = (percentual >= 0 ? '+' : '') + formatarNumero(percentual) + '%';
    if (diferenca > 0) {
      celulaValor.classList.add('dif-positivo');
      celulaPercentual.classList.add('dif-positivo');
    } else if (diferenca < 0) {
      celulaValor.classList.add('dif-negativo');
      celulaPercentual.classList.add('dif-negativo');
    }
  } else {
    celulaValor.textContent = '';
    celulaPercentual.textContent = '';
  }
}

// GRUPOS
const gruposMateriais = [
  'Agregados e Britas', 'Concreto, Cimento e Argamassa', 'Metálicos, Aço e Fixadores',
  'Combustíveis', 'Hospedagem e Refeições', 'Gramados e Vegetação',
  'Pré-moldados de Concreto', 'Madeiramento e Carpintaria', 'Produtos Químicos e Tratamentos',
  'Ferramentas e Acessórios', 'Sinalização', 'Fios, Arames e Telas', 'Componentes Especiais de Obra'
];
const gruposEquipamentos = [
  'Caminhões e Veículos Leves', 'Máquinas Pesadas de Terraplenagem', 'Equipamentos Ferroviários',
  'Compactação e Vibração', 'Solda, Corte e Geração', 'Ferramentas e Oficina',
  'Concretagem e Mistura', 'Equipamentos Auxiliares'
];
function preencherGrupoMateriais() {
  const select = document.getElementById('filtroGrupoMateriais');
  select.innerHTML = '<option value="todos">Todos</option>';
  gruposMateriais.forEach(grupo => {
    const opt = document.createElement('option');
    opt.value = grupo;
    opt.textContent = grupo;
    select.appendChild(opt);
  });
}
function preencherGrupoEquipamentos() {
  const select = document.getElementById('filtroGrupoEquipamentos');
  select.innerHTML = '<option value="todos">Todos</option>';
  gruposEquipamentos.forEach(grupo => {
    const opt = document.createElement('option');
    opt.value = grupo;
    opt.textContent = grupo;
    select.appendChild(opt);
  });
}
function filtrarMateriais() {
  const grupo = document.getElementById('filtroGrupoMateriais').value;
  let filtrados = dadosMateriais;
  if (grupo !== 'todos') {
    filtrados = dadosMateriais.filter(i => i.grupo === grupo);
  }
  preencherTabela('materiais-compras', filtrados);
}
function filtrarEquipamentos() {
  const grupo = document.getElementById('filtroGrupoEquipamentos').value;
  let filtrados = dadosEquipamentos;
  if (grupo !== 'todos') {
    filtrados = dadosEquipamentos.filter(i => i.grupo === grupo);
  }
  preencherTabela('equipamentos-compras', filtrados);
}
function renderAnalise(dadosOriginais, precosPraticados,
  idGraficoOrcado, idGraficoSimulado, idTabABCOrcada, idTabABCSimulada, idTop10Qtd, idTop10Val) {

  // === ABC Orçada ===
  let abcOrcado = calcularABC(dadosOriginais, "preco_total");
  let corpoABCOrcado = document.getElementById(idTabABCOrcada);
  if (corpoABCOrcado) {
    corpoABCOrcado.innerHTML = '';
    abcOrcado.forEach(item => {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>${formatarDinheiro(item.valor)}</td>
        <td>${formatarNumero(item.acumulado)}%</td>
        <td>${item.classe}</td>
      `;
      corpoABCOrcado.appendChild(tr);
    });
  }

  // === ABC Simulada ===
  let dadosSim = dadosComNovoValorTotal(dadosOriginais, precosPraticados);
  let abcSim = calcularABC(dadosSim, "novo_valor_total");
  let corpoABCSim = document.getElementById(idTabABCSimulada);
  if (corpoABCSim) {
    corpoABCSim.innerHTML = '';
    abcSim.forEach(item => {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>${formatarDinheiro(item.valor)}</td>
        <td>${formatarNumero(item.acumulado)}%</td>
        <td>${item.classe}</td>
      `;
      corpoABCSim.appendChild(tr);
    });
  }

  // === Gráfico Orçado ===
  let ctxOrcado = document.getElementById(idGraficoOrcado);
  if (ctxOrcado) {
    if (ctxOrcado.chartInstance) ctxOrcado.chartInstance.destroy();
    ctxOrcado.chartInstance = new Chart(ctxOrcado, {
      type: 'bar',
      data: {
        labels: abcOrcado.map(x => x.descricao),
        datasets: [
          {
            type: 'bar',
            label: 'Valor Total',
            data: abcOrcado.map(x => x.valor),
            yAxisID: 'y1'
          },
          {
            type: 'line',
            label: 'Acumulado (%)',
            data: abcOrcado.map(x => x.acumulado),
            yAxisID: 'y2',
            borderColor: '#1a3a5e',
            backgroundColor: '#1a3a5e',
            fill: false,
            tension: 0.1,
            pointRadius: 2
          }
        ]
      },
      options: {
        responsive: true,
        interaction: { mode: 'index', intersect: false },
        plugins: { legend: { display: true } },
        scales: {
          y1: {
            type: 'linear',
            position: 'left',
            title: { display: true, text: 'Valor Total (R$)' },
          },
          y2: {
            type: 'linear',
            position: 'right',
            title: { display: true, text: 'Acumulado (%)' },
            min: 0, max: 100,
            grid: { drawOnChartArea: false }
          }
        }
      }
    });
  }

  // === Gráfico Simulado ===
  let ctxSim = document.getElementById(idGraficoSimulado);
  if (ctxSim) {
    if (ctxSim.chartInstance) ctxSim.chartInstance.destroy();
    ctxSim.chartInstance = new Chart(ctxSim, {
      type: 'bar',
      data: {
        labels: abcSim.map(x => x.descricao),
        datasets: [
          {
            type: 'bar',
            label: 'Novo Valor Total',
            data: abcSim.map(x => x.valor),
            yAxisID: 'y1'
          },
          {
            type: 'line',
            label: 'Acumulado (%)',
            data: abcSim.map(x => x.acumulado),
            yAxisID: 'y2',
            borderColor: '#1a3a5e',
            backgroundColor: '#1a3a5e',
            fill: false,
            tension: 0.1,
            pointRadius: 2
          }
        ]
      },
      options: {
        responsive: true,
        interaction: { mode: 'index', intersect: false },
        plugins: { legend: { display: true } },
        scales: {
          y1: {
            type: 'linear',
            position: 'left',
            title: { display: true, text: 'Novo Valor Total (R$)' },
          },
          y2: {
            type: 'linear',
            position: 'right',
            title: { display: true, text: 'Acumulado (%)' },
            min: 0, max: 100,
            grid: { drawOnChartArea: false }
          }
        }
      }
    });
  }

  // ==== TOP 10 QUANTIDADES (DINÂMICO) ====
  let top10Qtd = [...dadosSim].sort((a, b) => parseNumeroBR(b.quantidade) - parseNumeroBR(a.quantidade)).slice(0, 10);
  let corpoTopQtd = document.getElementById(idTop10Qtd);
  if (corpoTopQtd) {
    corpoTopQtd.innerHTML = '';
    top10Qtd.forEach(item => {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>${formatarNumero(item.quantidade)}</td>
        <td>${item.unidade}</td>
      `;
      corpoTopQtd.appendChild(tr);
    });
  }

  // ==== TOP 10 VALORES (DINÂMICO) ====
  let top10Simulado = [...dadosSim].sort((a, b) => b.novo_valor_total - a.novo_valor_total).slice(0, 10);
  let corpoTopVal = document.getElementById(idTop10Val);
  if (corpoTopVal) {
    corpoTopVal.innerHTML = '';
    top10Simulado.forEach(item => {
      const dif = arredondar2(item.novo_valor_total - parseNumeroBR(item.preco_total));
      const pct = parseNumeroBR(item.preco_total) !== 0 ? arredondar2((dif / parseNumeroBR(item.preco_total)) * 100) : 0;
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>${formatarDinheiro(item.preco_total)}</td>
        <td>${formatarDinheiro(item.novo_valor_total)}</td>
        <td class="${dif > 0 ? 'dif-positivo' : dif < 0 ? 'dif-negativo' : 'dif-neutro'}">${dif >= 0 ? '+' : '-'} ${formatarDinheiro(Math.abs(dif))}</td>
        <td class="${pct > 0 ? 'dif-positivo' : pct < 0 ? 'dif-negativo' : 'dif-neutro'}">${pct >= 0 ? '+' : '-'} ${formatarNumero(Math.abs(pct))}%</td>
      `;
      corpoTopVal.appendChild(tr);
    });
  }

  // === GRÁFICOS DE PIZZA E TABELA DE GRUPOS ===
  renderPizzasEGrupo(
    dadosOriginais, precosPraticados,
    abcOrcado, abcSim,
    idTabABCOrcada === 'tabelaABCOrcadaMateriais' ? 'pizzaABCItensMateriais' : 'pizzaABCItensEquipamentos',
    idTabABCOrcada === 'tabelaABCOrcadaMateriais' ? 'pizzaABCValoresMateriais' : 'pizzaABCValoresEquipamentos',
    idTabABCOrcada === 'tabelaABCOrcadaMateriais' ? 'pizzaABCItensMateriaisSim' : 'pizzaABCItensEquipamentosSim',
    idTabABCOrcada === 'tabelaABCOrcadaMateriais' ? 'pizzaABCValoresMateriaisSim' : 'pizzaABCValoresEquipamentosSim',
    idTabABCOrcada === 'tabelaABCOrcadaMateriais' ? 'tabelaTotaisGrupoMateriais' : 'tabelaTotaisGrupoEquipamentos'
  );
}

function renderPizzasEGrupo(
  dadosOriginais, precosPraticados, abcOrcado, abcSimulado,
  pizzaItensId, pizzaValoresId, pizzaItensSimId, pizzaValoresSimId, idTabelaGrupo
) {
  // GRÁFICOS DE PIZZA - Orçada
  let countA = abcOrcado.filter(i => i.classe == 'A').length;
  let countB = abcOrcado.filter(i => i.classe == 'B').length;
  let countC = abcOrcado.filter(i => i.classe == 'C').length;
  let ctxP = document.getElementById(pizzaItensId);
  if (ctxP) {
    if (ctxP.chartInstance) ctxP.chartInstance.destroy();
    ctxP.chartInstance = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{ data: [countA, countB, countC], backgroundColor: ['#1a3a5e', '#ffc107', '#6c757d'] }]
      },
      options: { plugins: { legend: { display: true } } }
    });
  }

  let sumA = abcOrcado.filter(i => i.classe == 'A').reduce((s, x) => s + x.valor, 0);
  let sumB = abcOrcado.filter(i => i.classe == 'B').reduce((s, x) => s + x.valor, 0);
  let sumC = abcOrcado.filter(i => i.classe == 'C').reduce((s, x) => s + x.valor, 0);
  let ctxPV = document.getElementById(pizzaValoresId);
  if (ctxPV) {
    if (ctxPV.chartInstance) ctxPV.chartInstance.destroy();
    ctxPV.chartInstance = new Chart(ctxPV, {
      type: 'pie',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{ data: [sumA, sumB, sumC], backgroundColor: ['#1a3a5e', '#ffc107', '#6c757d'] }]
      },
      options: { plugins: { legend: { display: true } } }
    });
  }

  // GRÁFICOS DE PIZZA - Simulada
  let countASim = abcSimulado.filter(i => i.classe == 'A').length;
  let countBSim = abcSimulado.filter(i => i.classe == 'B').length;
  let countCSim = abcSimulado.filter(i => i.classe == 'C').length;
  let ctxPsim = document.getElementById(pizzaItensSimId);
  if (ctxPsim) {
    if (ctxPsim.chartInstance) ctxPsim.chartInstance.destroy();
    ctxPsim.chartInstance = new Chart(ctxPsim, {
      type: 'pie',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{ data: [countASim, countBSim, countCSim], backgroundColor: ['#1a3a5e', '#ffc107', '#6c757d'] }]
      },
      options: { plugins: { legend: { display: true } } }
    });
  }

  let sumASim = abcSimulado.filter(i => i.classe == 'A').reduce((s, x) => s + x.valor, 0);
  let sumBSim = abcSimulado.filter(i => i.classe == 'B').reduce((s, x) => s + x.valor, 0);
  let sumCSim = abcSimulado.filter(i => i.classe == 'C').reduce((s, x) => s + x.valor, 0);
  let ctxPVsim = document.getElementById(pizzaValoresSimId);
  if (ctxPVsim) {
    if (ctxPVsim.chartInstance) ctxPVsim.chartInstance.destroy();
    ctxPVsim.chartInstance = new Chart(ctxPVsim, {
      type: 'pie',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{ data: [sumASim, sumBSim, sumCSim], backgroundColor: ['#1a3a5e', '#ffc107', '#6c757d'] }]
      },
      options: { plugins: { legend: { display: true } } }
    });
  }

  // TABELA POR GRUPO
  if (idTabelaGrupo) {
    let dadosSim = dadosComNovoValorTotal(dadosOriginais, precosPraticados);
    let grupos = {};
    dadosOriginais.forEach(item => {
      let grupo = item.grupo || '-';
      if (!grupos[grupo]) grupos[grupo] = { orc: 0, sim: 0 };
      grupos[grupo].orc += parseNumeroBR(item.preco_total);
    });
    dadosSim.forEach(item => {
      let grupo = item.grupo || '-';
      if (!grupos[grupo]) grupos[grupo] = { orc: 0, sim: 0 };
      grupos[grupo].sim += parseNumeroBR(item.novo_valor_total);
    });
    let arrGrupos = Object.entries(grupos).map(([grupo, val]) => ({
      grupo,
      valor_orcado: arredondar2(val.orc),
      valor_simulado: arredondar2(val.sim),
      diferenca: arredondar2(val.sim - val.orc),
      diferenca_pct: val.orc !== 0 ? arredondar2(((val.sim - val.orc) / val.orc) * 100) : 0
    })).sort((a, b) => b.valor_simulado - a.valor_simulado);
    let corpo = document.getElementById(idTabelaGrupo);
    if (corpo) {
      corpo.innerHTML = '';
      arrGrupos.forEach(item => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${item.grupo}</td>
          <td>${formatarDinheiro(item.valor_orcado)}</td>
          <td>${formatarDinheiro(item.valor_simulado)}</td>
          <td class="${item.diferenca > 0 ? 'dif-positivo' : item.diferenca < 0 ? 'dif-negativo' : 'dif-neutro'}">${item.diferenca >= 0 ? '+' : '-'} ${formatarDinheiro(Math.abs(item.diferenca))}</td>
          <td class="${item.diferenca_pct > 0 ? 'dif-positivo' : item.diferenca_pct < 0 ? 'dif-negativo' : 'dif-neutro'}">${item.diferenca_pct >= 0 ? '+' : '-'} ${formatarNumero(Math.abs(item.diferenca_pct))}%</td>
        `;
        corpo.appendChild(tr);
      });
    }
  }
}

// NAVEGAÇÃO SPA
function mostrarSecao(secaoId) {
  ['materiais-compras','equipamentos-compras','analise-materiais','analise-equipamentos','dashboard-consolidado']
    .forEach(id => {
      const div = document.getElementById(id);
      if (div) div.style.display = (id === secaoId) ? 'block' : 'none';
    });
  document.getElementById('filtro-cards-materiais').style.display = 'none';
  document.getElementById('filtro-cards-equipamentos').style.display = 'none';
  if (secaoId === 'materiais-compras') {
    document.getElementById('filtro-cards-materiais').style.display = 'flex';
    preencherGrupoMateriais();
    filtrarMateriais();
  }
  if (secaoId === 'equipamentos-compras') {
    document.getElementById('filtro-cards-equipamentos').style.display = 'flex';
    preencherGrupoEquipamentos();
    filtrarEquipamentos();
  }
  if (secaoId === 'analise-materiais') {
    renderAnalise(
      dadosMateriais,
      precosPraticadosMateriais,
      'graficoABCOrcadaMateriais', 'graficoABCSimuladaMateriais',
      'tabelaABCOrcadaMateriais', 'tabelaABCSimuladaMateriais',
      'tabelaTop10QuantMateriais', 'tabelaTop10ValoresMateriais'
    );
  }
  if (secaoId === 'analise-equipamentos') {
    renderAnalise(
      dadosEquipamentos,
      precosPraticadosEquipamentos,
      'graficoABCOrcadaEquipamentos', 'graficoABCSimuladaEquipamentos',
      'tabelaABCOrcadaEquipamentos', 'tabelaABCSimuladaEquipamentos',
      'tabelaTop10QuantEquipamentos', 'tabelaTop10ValoresEquipamentos'
    );
  }
  if (secaoId === 'dashboard-consolidado') {
    atualizarDashboardConsolidado();
  }
}

// RENDERIZAÇÕES DE ANÁLISE E DASHBOARD
// =================== CONSOLIDADO GERAL DE ITENS (MATERIAL + EQUIPAMENTO) ===================

function atualizarDashboardConsolidado() {
  // 1. Materiais e Equipamentos com novo valor real
  const materiaisAtualizados = dadosComNovoValorTotal(dadosMateriais, precosPraticadosMateriais)
    .map(item => ({
      descricao: item.descricao,
      categoria: "Material",
      valor_orcado: parseNumeroBR(item.preco_total),
      novo_valor: arredondar2(item.novo_valor_total),
      unidade: item.unidade,
      quantidade: parseNumeroBR(item.quantidade)
    }));
  const equipamentosAtualizados = dadosComNovoValorTotal(dadosEquipamentos, precosPraticadosEquipamentos)
    .map(item => ({
      descricao: item.descricao,
      categoria: "Equipamento",
      valor_orcado: parseNumeroBR(item.preco_total),
      novo_valor: arredondar2(item.novo_valor_total),
      unidade: item.unidade,
      quantidade: parseNumeroBR(item.quantidade)
    }));

  // 2. Consolidado ordenado por novo valor total
  const consolidado = [...materiaisAtualizados, ...equipamentosAtualizados]
    .sort((a, b) => b.novo_valor - a.novo_valor);

  // 3. Preencher tabela consolidada
  const tbody = document.getElementById('tabelaDashboardConsolidado');
  if (tbody) {
    tbody.innerHTML = "";
    consolidado.forEach(item => {
      const diferenca = arredondar2(item.novo_valor - item.valor_orcado);
      const diferencaPct = item.valor_orcado !== 0 ? arredondar2((diferenca / item.valor_orcado) * 100) : 0;
      const classeComparacao = diferenca > 0 ? "positivo" : diferenca < 0 ? "negativo" : "";
      const sinalDif = diferenca >= 0 ? "+" : "-";
      const sinalPct = diferencaPct >= 0 ? "+" : "-";
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>${item.categoria}</td>
        <td>${formatarDinheiro(item.valor_orcado)}</td>
        <td>${formatarDinheiro(item.novo_valor)}</td>
        <td class="${classeComparacao}">${sinalDif} ${formatarDinheiro(Math.abs(diferenca))}</td>
        <td class="${classeComparacao}">${sinalPct} ${formatarNumero(Math.abs(diferencaPct))}%</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // 4. Atualizar cards de totais
  atualizarCardsConsolidados(materiaisAtualizados, equipamentosAtualizados);

  // 5. Atualizar Top 10
  atualizarTop10(consolidado);

  // 6. Atualizar gráficos ABC
  atualizarGraficosABC([...dadosMateriais, ...dadosEquipamentos], consolidado);

  // 7. NOVO: Atualizar cards de diferença geral entre simulado e orçado do projeto
  // Precisa buscar os valores atualizados dos cards (ou recalcular):
  const totalMateriais = materiaisAtualizados.reduce((acc, item) => acc + (item.valor_orcado || 0), 0);
  const totalEquipamentos = equipamentosAtualizados.reduce((acc, item) => acc + (item.valor_orcado || 0), 0);
  const totalMateriaisNovo = materiaisAtualizados.reduce((acc, item) => acc + (item.novo_valor || 0), 0);
  const totalEquipamentosNovo = equipamentosAtualizados.reduce((acc, item) => acc + (item.novo_valor || 0), 0);

  const totalOrcadoProjeto = arredondar2(totalMateriais + totalEquipamentos);
  const totalSimuladoProjeto = arredondar2(totalMateriaisNovo + totalEquipamentosNovo);
  const diferencaGeral = arredondar2(totalSimuladoProjeto - totalOrcadoProjeto);
  const diferencaGeralPct = totalOrcadoProjeto !== 0 ? arredondar2((diferencaGeral / totalOrcadoProjeto) * 100) : 0;

  // Atualiza os cards de diferença geral
  const cardReais = document.getElementById('cardDiferencaProjetoReais');
  const cardPct = document.getElementById('cardDiferencaProjetoPct');
  if (cardReais) {
    cardReais.textContent = (diferencaGeral >= 0 ? '+ ' : '- ') + formatarDinheiro(Math.abs(diferencaGeral));
    cardReais.style.color = diferencaGeral > 0 ? '#198754' : diferencaGeral < 0 ? '#dc3545' : '#212529';
  }
  if (cardPct) {
    cardPct.textContent = (diferencaGeralPct >= 0 ? '+ ' : '- ') + formatarNumero(Math.abs(diferencaGeralPct)) + '%';
    cardPct.style.color = diferencaGeralPct > 0 ? '#198754' : diferencaGeralPct < 0 ? '#dc3545' : '#212529';
  }
}

// ========== FUNÇÕES NOVAS/INTEGRADAS PARA O DASHBOARD CONSOLIDADO ==========

function atualizarCardsConsolidados(materiaisAtualizados, equipamentosAtualizados) {
  const soma = arr => arr.reduce((acc, item) => acc + (item.valor_orcado || 0), 0);
  const somaNovo = arr => arr.reduce((acc, item) => acc + (item.novo_valor || 0), 0);

  const totalMateriais = soma(materiaisAtualizados);
  const totalEquipamentos = soma(equipamentosAtualizados);
  const totalMateriaisNovo = somaNovo(materiaisAtualizados);
  const totalEquipamentosNovo = somaNovo(equipamentosAtualizados);

  // Atualiza cards dos orçados
  document.getElementById('orcado-materiais').innerText = formatarDinheiro(totalMateriais);
  document.getElementById('orcado-equipamentos').innerText = formatarDinheiro(totalEquipamentos);
  document.getElementById('orcado-total').innerText = formatarDinheiro(totalMateriais + totalEquipamentos);

  // Atualiza cards dos simulados
  document.getElementById('simulado-materiais').innerText = formatarDinheiro(totalMateriaisNovo);
  document.getElementById('simulado-equipamentos').innerText = formatarDinheiro(totalEquipamentosNovo);
  document.getElementById('simulado-total').innerText = formatarDinheiro(totalMateriaisNovo + totalEquipamentosNovo);
}

function atualizarTop10(consolidado) {
  const top10 = consolidado.slice(0, 10);
  const tbodyTop10 = document.getElementById('tabelaDashboardTop10');
  if (tbodyTop10) {
    tbodyTop10.innerHTML = "";
    top10.forEach(item => {
      const tr = document.createElement('tr');
      const dif = arredondar2(item.novo_valor - item.valor_orcado);
      const difPct = item.valor_orcado !== 0 ? arredondar2((dif / item.valor_orcado) * 100) : 0;
      tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>${item.categoria}</td>
        <td>${formatarDinheiro(item.valor_orcado)}</td>
        <td>${formatarDinheiro(item.novo_valor)}</td>
        <td class="${dif > 0 ? 'negativo' : dif < 0 ? 'positivo' : ''}">${dif >= 0 ? '+' : '-'} ${formatarDinheiro(Math.abs(dif))}</td>
        <td class="${difPct > 0 ? 'negativo' : difPct < 0 ? 'positivo' : ''}">${difPct >= 0 ? '+' : '-'} ${formatarNumero(Math.abs(difPct))}%</td>
      `;
      tbodyTop10.appendChild(tr);
    });
  }
}

function atualizarGraficosABC(itensOriginais, consolidado) {
  // Curva ABC baseada no novo_valor
  const todos = [...consolidado].sort((a, b) => b.novo_valor - a.novo_valor);
  const totalGeral = todos.reduce((acc, item) => acc + item.novo_valor, 0);
  let acumulado = 0;
  const labels = [];
  const dadosValores = [];
  const percentuaisAcumulados = [];

  todos.forEach(item => {
    labels.push(item.descricao);
    dadosValores.push(item.novo_valor);
    acumulado += item.novo_valor;
    percentuaisAcumulados.push(100 * acumulado / totalGeral);
  });

  // Remove gráfico anterior se houver
  let graficoDiv = document.getElementById('graficoDashboardCurvaABC');
  if (graficoDiv) {
    graficoDiv.innerHTML = '';
    let novoCanvas = document.createElement('canvas');
    novoCanvas.id = 'graficoDashboardCurvaABCCanvas';
    novoCanvas.height = 200;
    graficoDiv.appendChild(novoCanvas);

    new Chart(novoCanvas, {
      type: 'bar',
      data: {
        labels: labels.slice(0, 20), // Top 20 para visualização
        datasets: [{
          label: 'Novo Valor Total',
          data: dadosValores.slice(0, 20),
          yAxisID: 'A'
        },{
          label: '% Acumulado',
          data: percentuaisAcumulados.slice(0, 20),
          type: 'line',
          borderWidth: 2,
          fill: false,
          yAxisID: 'B'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Curva ABC Consolidada (Top 20)' }
        },
        scales: {
          A: {
            type: 'linear',
            position: 'left',
            title: { display: true, text: 'Valor Total (R$)' }
          },
          B: {
            type: 'linear',
            position: 'right',
            min: 0,
            max: 100,
            title: { display: true, text: '% Acumulado' }
          }
        }
      }
    });
  }
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
  mostrarSecao('materiais-compras');
  document.getElementById('filtroGrupoMateriais').addEventListener('change', filtrarMateriais);
  document.getElementById('filtroGrupoEquipamentos').addEventListener('change', filtrarEquipamentos);
  if (document.getElementById('menu-analise-materiais')) {
    document.getElementById('menu-analise-materiais').addEventListener('click', () => mostrarSecao('analise-materiais'));
  }
  if (document.getElementById('menu-analise-equipamentos')) {
    document.getElementById('menu-analise-equipamentos').addEventListener('click', () => mostrarSecao('analise-equipamentos'));
  }
  if (document.getElementById('menu-dashboard-consolidado')) {
    document.getElementById('menu-dashboard-consolidado').addEventListener('click', () => mostrarSecao('dashboard-consolidado'));
  }
});

// =================== FIM DO JS COMPLETO ===================

