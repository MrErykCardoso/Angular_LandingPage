import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp7-buttom-lero',
  templateUrl: './comp7-buttom-lero.component.html',
  styleUrls: ['./comp7-buttom-lero.component.css'],
  template: '<button (click)="gerarFrase()">Gerar frase<button>'
})
export class Comp7ButtomLeroComponent {

  @Output() fraseGerada = new EventEmitter<string>();

  frase = ['Do mesmo modo, a complexidade dos estudos efetuados auxilia a preparação e a composição dos níveis de motivação departamental.', 'Todavia, a valorização de fatores subjetivos aponta para a melhoria dos relacionamentos verticais entre as hierarquias.', 'Gostaria de enfatizar que o julgamento imparcial das eventualidades faz parte de um processo de gerenciamento dos índices pretendidos.', 'Ainda assim, existem dúvidas a respeito de como a adoção de políticas descentralizadoras agrega valor ao estabelecimento dos paradigmas corporativos.', 'Evidentemente, a crescente influência da mídia nos obriga à análise do sistema de participação geral.', 'É importante questionar o quanto o novo modelo estrutural aqui preconizado apresenta tendências no sentido de aprovar a manutenção de todos os recursos funcionais envolvidos.', 'Não obstante, a execução dos pontos do programa causa impacto indireto na reavaliação dos índices pretendidos.', 'As experiências acumuladas demonstram que a crescente influência da mídia maximiza as possibilidades por conta dos paradigmas corporativos.', 'Não obstante, a valorização de fatores subjetivos estimula a padronização do levantamento das variáveis envolvidas.', 'Assim mesmo, o comprometimento entre as equipes ainda não demonstrou convincentemente que vai participar na mudança dos relacionamentos verticais entre as hierarquias.', 'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o aumento do diálogo entre os diferentes setores produtivos pode nos levar a considerar a reestruturação das condições inegavelmente apropriadas.', 'As experiências acumuladas demonstram que a complexidade dos estudos efetuados facilita a criação das regras de conduta normativas.', 'Por conseguinte, a consolidação das estruturas pode nos levar a considerar a reestruturação dos métodos utilizados na avaliação de resultados.', 'Percebemos, cada vez mais, que o fenômeno da Internet representa uma abertura para a melhoria do sistema de formação de quadros que corresponde às necessidades.', 'No mundo atual, o aumento do diálogo entre os diferentes setores produtivos obstaculiza a apreciação da importância de alternativas às soluções ortodoxas.', 'Do mesmo modo, a competitividade nas transações comerciais nos obriga à análise dos modos de operação convencionais.', 'O cuidado em identificar pontos críticos na competitividade nas transações comerciais assume importantes posições no estabelecimento dos paradigmas corporativos.', 'Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a percepção das dificuldades maximiza as possibilidades por conta das regras de conduta normativas.', 'Desta maneira, o aumento do diálogo entre os diferentes setores produtivos oferece uma interessante oportunidade para verificação das diretrizes de desenvolvimento para o futuro.'];

  gerarFrase() {
    const indice = Math.floor(Math.random() * this.frase.length);
    const fraseGerada = this.frase[indice];
    this.fraseGerada.emit(fraseGerada);
  }

}
