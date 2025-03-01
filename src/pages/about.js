import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Sydney \n A British brand since 1860`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded in 1860, Sydney is an innovative British brand with a
              contemporary edge. We make timeless everyday luxury clothing.
            </p>
            <br />
            <br />
            <p>
              We created some of the world's first T-shirts and spent decades
              perfecting the feel of the cotton. Today we are the only brand
              that makes T-shirts in its own factory in the UK. And we do this
              in the same factory we have occupied since 1937.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>POLÍTICA DE COMPRAS E OPERAÇÕES</h3>
            <div ref={valuesRef}>

              <h4>I. INTRODUÇÃO</h4>
              <p>Este documento estabelece as <strong>condições de compra</strong>, <strong>políticas de envio</strong>, <strong>devoluções e trocas</strong>, <strong>cancelamento de pedidos</strong> e <strong>responsabilidades</strong> da Loja Virtual (doravante "LOJA") que opera no modelo de <strong>dropshipping</strong>. O termo <strong>dropshipping</strong> refere-se ao modelo de negócios no qual os produtos vendidos são enviados diretamente dos fornecedores para o consumidor final, sem a necessidade de manutenção de estoque pela LOJA. Ao realizar uma compra na LOJA, o consumidor (doravante "CLIENTE") concorda com todas as disposições aqui contidas.</p>

              <h4>II. DEFINIÇÕES</h4>
              <ol>
                <li><strong>Dropshipping</strong>: Modelo de negócios onde a LOJA não mantém estoque próprio dos produtos, enviando os itens adquiridos diretamente dos fornecedores para o CLIENTE.</li>
                <li><strong>Fornecedor</strong>: Empresa ou pessoa jurídica que fornece os produtos vendidos pela LOJA, sendo responsável pela fabricação e/ou envio dos itens adquiridos.</li>
                <li><strong>Pedido(s)</strong>: Ação formalizada pelo CLIENTE para adquirir produtos disponibilizados pela LOJA, que gera uma transação comercial.</li>
                <li><strong>Produto(s)</strong>: Itens disponíveis para compra na LOJA, fornecidos por fornecedores parceiros e que, uma vez adquiridos pelo CLIENTE, são enviados diretamente a ele.</li>
              </ol>

              <h4>III. PROCESSAMENTO DE PEDIDOS</h4>
              <ol>
                <li>Após a finalização da compra, o pedido do CLIENTE será encaminhado à LOJA e, posteriormente, à rede de fornecedores para processamento.</li>
                <li>O tempo de processamento do pedido pode variar entre <strong>1 (um) a 3 (três) dias úteis</strong>, de acordo com a natureza do produto e a logística envolvida no processo.</li>
                <li>A LOJA não se responsabiliza por quaisquer erros ou atrasos causados pelo fornecedor no processamento ou envio do pedido, mas tomará todas as medidas cabíveis para resolver a situação junto ao fornecedor.</li>
              </ol>

              <h4>IV. ENVIO E PRAZO DE ENTREGA</h4>
              <ol>
                <li>O envio dos produtos será realizado diretamente pelo fornecedor ao CLIENTE, podendo o prazo de entrega variar conforme a localização do CLIENTE e as condições logísticas do fornecedor.</li>
                <li>O prazo estimado de entrega é de <strong>7 (sete) a 20 (vinte) dias úteis</strong> após a confirmação do envio, sendo este um prazo indicativo sujeito a alterações devido a fatores imprevistos, como atrasos logísticos, questões alfandegárias ou forças maiores.</li>
                <li>Após o envio, o CLIENTE receberá um código de rastreamento para acompanhar o status de entrega do pedido.</li>
              </ol>

              <h4>V. POLÍTICA DE DEVOLUÇÕES E TROCAS</h4>
              <h5>1. Devoluções:</h5>
              <ul>
                <li>O CLIENTE poderá solicitar a devolução do produto <strong>no prazo de até 7 (sete) dias corridos</strong> após o recebimento do pedido, caso o produto apresente defeitos de fabricação ou não corresponda às especificações descritas no momento da compra.</li>
                <li>O produto deve ser devolvido em sua embalagem original, sem sinais de uso e com todos os seus acessórios.</li>
                <li>Caso a devolução seja aprovada, a LOJA garantirá o reembolso do valor pago, descontadas eventuais despesas de transporte e taxas de devolução aplicáveis.</li>
              </ul>

              <h5>2. Trocas:</h5>
              <ul>
                <li>O CLIENTE poderá solicitar a troca de um produto caso ele apresente defeito de fabricação ou erro de envio por parte do fornecedor.</li>
                <li>O pedido de troca deve ser formalizado <strong>no prazo de até 7 (sete) dias corridos</strong> após o recebimento do produto.</li>
                <li>A troca estará sujeita à disponibilidade do produto em estoque e à aceitação do fornecedor.</li>
              </ul>

              <h4>VI. CANCELAMENTO DE PEDIDOS</h4>
              <ol>
                <li>O CLIENTE poderá solicitar o cancelamento de seu pedido <strong>antes do envio do produto</strong>, por meio dos canais de atendimento da LOJA.</li>
                <li>Após o envio do pedido, o cancelamento não será possível, devendo o CLIENTE aguardar o recebimento do produto e, se necessário, seguir as diretrizes de devolução ou troca.</li>
                <li>Em casos excepcionais, e a critério da LOJA, o cancelamento poderá ser analisado caso a caso.</li>
              </ol>

              <h4>VII. RESPONSABILIDADES DO CLIENTE</h4>
              <ol>
                <li>O CLIENTE é responsável pela veracidade das informações fornecidas durante o processo de compra, incluindo dados pessoais, endereço de entrega e informações de pagamento.</li>
                <li>Caso o CLIENTE forneça informações incorretas, a LOJA se isenta de responsabilidade por quaisquer prejuízos ou atrasos decorrentes desses erros.</li>
              </ol>

              <h4>VIII. TAXAS E IMPOSTOS</h4>
              <ol>
                <li>Os preços dos produtos apresentados na LOJA já incluem todos os tributos aplicáveis, conforme legislação vigente.</li>
                <li>Contudo, em alguns casos, o CLIENTE poderá ser responsável por custos adicionais, como taxas de importação ou impostos alfandegários, caso o pedido seja enviado de outra jurisdição, e que não estão cobertos pela LOJA.</li>
              </ol>

              <h4>IX. PRIVACIDADE E SEGURANÇA</h4>
              <ol>
                <li>A LOJA compromete-se a proteger a privacidade e os dados pessoais do CLIENTE, utilizando medidas técnicas e administrativas para garantir a segurança das informações.</li>
                <li>Os dados pessoais coletados são utilizados exclusivamente para o processamento de pedidos e comunicação com o CLIENTE, sendo vedado o uso para qualquer outra finalidade sem o consentimento expresso do CLIENTE.</li>
                <li>Para mais detalhes sobre como tratamos os dados pessoais, consulte a nossa <strong>Política de Privacidade</strong>, disponível em nosso site.</li>
              </ol>

              <h4>X. MODIFICAÇÃO DAS POLÍTICAS</h4>
              <ol>
                <li>A LOJA se reserva o direito de modificar, a qualquer tempo, este documento, sem a necessidade de aviso prévio ao CLIENTE.</li>
                <li>Quaisquer modificações serão publicadas nesta página, e o CLIENTE se compromete a revisá-las periodicamente, sendo sua responsabilidade a leitura das atualizações.</li>
              </ol>

              <h4>XI. DISPOSIÇÕES FINAIS</h4>
              <ol>
                <li>Qualquer disputa decorrente da interpretação ou execução deste documento será resolvida de acordo com as leis brasileiras, sendo competente o foro da comarca do domicílio do CLIENTE para dirimir qualquer controvérsia.</li>
                <li>Caso qualquer cláusula deste documento seja considerada nula ou sem efeito, as demais disposições permanecerão válidas e eficazes.</li>
              </ol>

              <h4>XII. CONTATO</h4>
              <p>Para mais informações ou esclarecimentos, o CLIENTE poderá entrar em contato com a LOJA por meio dos seguintes canais:</p>
              <ul>
                <li><strong>E-mail</strong>: <a href="mailto:contato@lojaexemplo.com">contato@lojaexemplo.com</a></li>
                <li><strong>Telefone</strong>: (XX) XXXX-XXXX</li>
              </ul>

              <p><strong>Data da Última Atualização</strong>: 01/03/2025</p>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our founder, Thomas Hill, had both an eye for quality and a
                desire to innovate. As well as using the finest fibres such as
                Sea Island cotton, cashmere and silk, he invented his own
                fabrics. Sunspel continues this commitment to innovation today
                and our unique fabrics include: Q100 Sea Island cotton, Q82
                Supima cotton, Q75 warp knit mesh cotton and Q14 warp knit
                cellular cotton. The technology behind these fabrics remains
                unchanged today and all Sunspel products use the finest cottons,
                wools and fibres.
              </p>
              <p>
                Made in Long Eaton, England and crafted from our luxurious long
                staple Supima cotton for unparalleled softness, comfort and
                durability, the Sunspel T-shirt has a classic fit and only the
                most essential details.{' '}
              </p>
              <p>
                With over 100 years spent perfecting fabric, fit and style, the
                Sunspel Classic T-shirt is recognised as the finest in the
                world.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
