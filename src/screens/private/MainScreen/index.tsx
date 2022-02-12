import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';

import {showMessage} from 'react-native-flash-message';

import {PropsMainScreen} from '../../../routes/main.routes';
import {colors} from '../../../constants/theme';
import {screenHeight, screenWidth} from '../../../constants/dimensions';
import {FlatList} from 'react-native-gesture-handler';
import ArticleCard from '../../../components/ArticleCard';

const MainScreen = ({navigation}: PropsMainScreen) => {
  const [loading, setLoading] = useState(false);
  const [articlesList, setArticlesList] = useState([
    {
			"date": "2021-03-19 00:00:00 +0000",
			"url": "/es/more-savings/",
			"content": "<div class=\"box-content \" role=\"complementary\"><span class='sr-only'></span><p><strong>¿Aún necesita cobertura médica para 2022?</strong></p>\n\n<p>La Inscripción Abierta ha terminado. Todavía puede obtener un seguro médico para 2022 de 2 maneras:</p>\n\n<ul>\n<li>Si califica para un <a href=\"/es/coverage-outside-open-enrollment/special-enrollment-period\">Período Especial de Inscripción</a> debido a un <a href=\"/es/glossary/qualifying-life-event\" title=\"glossary\">evento de su vida</a> como perder otra cobertura, casarse o tener un bebé.</li>\n<li>Si califica para <a href=\"/es/medicaid-chip/getting-medicaid-chip\">Medicaid o el Programa de Seguro Médico para Niños (CHIP)</a>. Puede solicitar estos programas en cualquier momento.</li>\n</ul>\n\n<div><a class=\"btn\" href=\"/es/screener\">CONSULTE SI PUEDE OBTENER COBERTURA PARA 2022</a></div><span class='sr-only'></span></div>\n\n\n<p>Es posible que pueda obtener más ahorros y costos más bajos en la cobertura de seguro médico del Mercado debido a la Ley del Plan de Rescate Estadounidense de 2021. Bajo la nueva ley:</p>\n\n<ul>\n<li>Más personas que nunca calificarán para recibir ayuda para pagar la cobertura médica, incluso aquellas que no eran elegibles en el pasado.</li>\n<li>La mayoría de las personas actualmente inscritas en un plan del Mercado pueden calificar para más créditos fiscales.</li>\n<li><a href=\"/es/glossary/premium\" title=\"glossary\">Las primas del</a> seguro médico después de estos nuevos ahorros bajarán.</li>\n</ul>\n\n\n<h2>Cómo saber si califica para los ahorros del Mercado</h2>\n\n<p>Cuando solicite la cobertura del Mercado, sabrá si califica para <a href=\"/es/glossary/premium-tax-credit\" title=\"glossary\">un crédito fiscal para la prima</a> para reducir su prima mensual.</p>\n\n<p>La cantidad de su crédito fiscal para la prima depende del ingreso familiar estimado para 2022 que ingresó en su solicitud del Mercado.</p>\n\n<p><strong><a href=\"/es/lower-costs/\">Averigüe si sus ingresos estimados para 2022 están en el rango para calificar para un crédito fiscal para primas.</a></strong></p>\n\n<h2>Si su estado no usa CuidadoDeSalud.gov</h2>\n\n<p>Visite el sitio web de su Mercado estatal o comuníquese con su centro de llamadas para obtener más información sobre cuándo estarán disponibles estos ahorros adicionales a través de su Mercado.</p>\n\n<p><strong>¿No está seguro de qué sitio web usa su estado?</strong> <a href=\"/es/get-coverage/\">Seleccione su estado para averiguarlo.</a></p>\n",
			"tags": [],
			"title": "Nuevos costos más bajos en la cobertura del Mercado",
			"categories": [
				"es"
			],
			"lang": "es",
			"layout": "basic"
		},
		{
			"date": "2021-03-19 00:00:00 +0000",
			"url": "/more-savings/",
			"content": "<div class=\"box-content \" role=\"complementary\"><span class='sr-only'>Begin highlighted text</span><p><strong>Still need health coverage for 2022?</strong></p>\n\n<p>Open Enrollment is over. You can still get 2022 health insurance 2 ways:</p>\n\n<ul>\n<li>If you qualify for a <a href=\"/coverage-outside-open-enrollment/special-enrollment-period\">Special Enrollment Period</a> due to a <a href=\"/glossary/qualifying-life-event\" title=\"glossary\">life event</a> like losing other coverage, getting married, or having a baby.</li>\n<li>If you qualify for <a href=\"/medicaid-chip/getting-medicaid-chip\">Medicaid or the Children's Health Insurance Program (CHIP)</a>. You can apply for these programs any time.</li>\n</ul>\n\n<div><a class=\"btn\" href=\"/screener\">SEE IF YOU CAN GET 2022 COVERAGE</a></div><span class='sr-only'>End highlighted text</span></div>\n\n\n<p>You may be able to get more savings and lower costs on Marketplace health insurance coverage due to the American Rescue Plan Act of 2021. Under the new law:</p>\n\n<ul>\n<li>More people than ever before qualify for help paying for health coverage, even those who weren’t eligible in the past.</li>\n<li>Most people currently enrolled in a Marketplace plan may qualify for more tax credits.</li>\n<li>Health insurance <a href=\"/glossary/premium\" title=\"glossary\">premiums</a> after these new savings will go down.</li>\n</ul>\n\n\n<h2>How to find out if you qualify for Marketplace savings</h2>\n\n<p>When you apply for Marketplace coverage, you’ll find out if you qualify for a <a href=\"/glossary/premium-tax-credit\" title=\"glossary\">premium tax credit</a> that lowers your monthly premium.</p>\n\n<p>The amount of your premium tax credit depends on the estimated household income for 2022 that you put on your Marketplace application.</p>\n\n<p><strong><a href=\"/lower-costs\">Find out if your estimated 2022 income is in the range to qualify for a premium tax credit.</a></strong></p>\n\n<h2>If your state doesn’t use HealthCare.gov</h2>\n\n<p>Visit your State Marketplace website or contact their Call Center for more information about when these additional savings will be available through your Marketplace.</p>\n\n<p><strong>Not sure which website your state uses?</strong> <a href=\"/get-coverage/\">Select your state to find out</a>.</p>\n",
			"tags": [],
			"title": "New, lower costs on Marketplace coverage",
			"categories": [],
			"lang": "en",
			"layout": "basic"
		}
  ])


  const renderItem = (item: any) => <Text>{item.title}</Text>;

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus artigos</Text>

        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../../../assets/images/sanar-icon.png')}
            style={{height: screenHeight * 0.1}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size={'large'} color={colors.primary} />
      ) : (
        <FlatList
          data={articlesList}
          renderItem={({item, index}) => (
            <ArticleCard content={item.content}
            date={item.date}
            title={item.title}
            onPress={()=> console.log('')}
            />
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    paddingTop: screenHeight * 0.05,
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth * 0.85,
  },
  title: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: 34,
    color: colors.primary,
  },
});

export default MainScreen;
