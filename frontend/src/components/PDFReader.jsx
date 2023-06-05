import { Card } from 'react-bootstrap'
import { Document, Link, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  image: {
    width: 550,
    height: 300,
    paddingLeft: 55
  },
  page: {
    backgroundColor: "#444",
    color: "white"
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12
  },
  links: {
    fontSize: 8,
    padding: -10,
    textAlign: "right"
  },
  content: {
    margin: 10,
    padding: 10,
    fontSize: 10,
    lineHeight: 1.6,
    textAlign: "left"
  },
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight
  }
})

export default function PDFReader() {
  return (
    <Card className="card-pdf">
      <Card.Header>
        <Card.Body className="row" style={{ overflowY: "scroll", height: 480 }}>
          <PDFViewer style={styles.viewer}>
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Capítulo: Banco de dados MySQL e Implantação no Heroku.</Text>
                </View>
                <Image style={styles.image}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JZXz214_L-CHSxKF92Z8ovnXGHGbe1InKHgi_unmrY_qWg1PcIQ5N3o&s=10"
                />
                <View style={styles.section}>
                  <Text>Objetivo geral:</Text>
                </View>

                <View style={styles.content}>
                  <Text>  Incluir banco de dados relacional MySQL ao projeto para ser utilizado tanto em desenvolvimento quanto em produção.</Text>
                  <Text>  Definir profiles de projeto (teste, desenvolvimento, produção).</Text>
                  <Text>  Implantar o backend no Heroku.</Text>
                </View>

                <View style={styles.section}>
                  <Text>Instalação do MySQL Sugestões para instalação:</Text>
                </View>

                <View style={styles.content}>
                  <Text>  Xampp (Windows, Mac, Linux).</Text>
                  <Text>  Wamp (Windows).</Text>
                  <Text>  Mamp (Mac).</Text>
                  <Text>  Lamp (Linux).</Text>
                  <Text>Não esqueça de incluir a pasta bin do MySQL no PATH do seu sistema.</Text>
                </View>

                <View break style={styles.section}>
                  <Text>Criando profile de teste:</Text>
                </View>

                <View style={styles.content}>
                  <Text>application-test.properties</Text>
                  <Text>spring.datasource.url=jdbc:h2:mem:testdb</Text>
                  <Text>spring.datasource.username=sa</Text>
                  <Text>spring.datasource.password=</Text>
                  <Text>spring.jpa.show-sql=true</Text>
                  <Text>spring.jpa.properties.hibernate.format_sql=true</Text>
                  <Text>application.properties</Text>
                  <Text>spring.profiles.active=test</Text>
                </View>

                <View style={styles.section}>
                  <Text>Criando profile de desenvolvimento:</Text>
                </View>

                <View style={styles.content}>
                  <Text>application-dev.properties</Text>
                  <Text>spring.datasource.url=jdbc:mysql://localhost:3306/curso_spring</Text>
                  <Text>spring.datasource.password=</Text>
                  <Text>spring.jpa.hibernate.ddl-auto=create</Text>
                  <Text>spring.jpa.show-sql=true</Text>
                  <Text>spring.jpa.properties.hibernate.format_sql=true</Text>
                  <Text>application.properties</Text>
                  <Text>spring.profiles.active=dev</Text>
                </View>

                <View style={styles.section}>
                  <Text>Instalando/preparando o Heroku:</Text>
                </View>

                <View style={styles.content}>
                  <Text>  Acesse heroku.com e faça o procedimento.</Text>
                  <Text>  Sign up.</Text>
                  <Text>  Abra seu email e clique no link de confirmação.</Text>
                  <Text>  Defina uma senha.</Text>
                </View>

                <View style={styles.section}>
                  <Text>Criando um novo app:</Text>
                </View>

                <View style={styles.content}>
                  <Text>  Create New App.</Text>
                  <Text>  Nome (opcional).</Text>
                  <Text>  Escolha a localidade.</Text>
                </View>

                <View break style={styles.section}>
                  <Text>Instalação do MySQL no Heroku:</Text>
                </View>

                <View style={styles.content}>
                  <Text>  Aba Overview Configure Add-ons.</Text>
                  <Text>  Procure "MySQL" na caixa de pesquisa e escolha o ClearDB MySQL.</Text>
                  <Text>  Escolha o plano e clique em Provide.</Text>
                  <Text>  Cadastrar um cartão de crédito (https://dashboard.heroku.com/account/billing).</Text>
                  <Text>  Documentação do ClearDB: https://devcenter.heroku.com/articles/cleardb.</Text>
                </View>

                <View style={styles.section}>
                  <Text>Instalação do Heroku CLI:</Text>
                </View>

                <View style={styles.content}>
                  <Text>  https://devcenter.heroku.com/articles/heroku-cli#download-and-install.</Text>
                  <Text>  Escolha a versão para seu sistema faça o procedimento de instalação.</Text>
                  <Text>  Abra o terminal (no Windows o cmd) e faça login:</Text>
                  <Text>  heroku login.</Text>
                </View>

                <View style={styles.section}>
                  <Text>Dump da base de dados para o Heroku:</Text>
                </View>

                <View style={styles.content}>
                  <Text>1 Gere um backup da base de dados local:</Text>
                  <Text>  mysqldump -u user -p dbname arquivo.sql.</Text>
                  <Text>  Exemplo: mysqldump -u root -p curso_spring arquivo.sql.</Text>
                  <Text>2 Associe o repositório local com o Heroku:</Text>
                  <Text>Acesse o terminal (no Windows o Git Bash) na pasta do projeto:</Text>
                  <Text>heroku git:remote -a curso-spring-ionic</Text>
                  <Text>3 Execute o SQL gerado no servidor do Heroku.</Text>
                  <Text>3.1 Obtenha a URL do banco de dados.</Text>
                  <Text>Acesse o terminal (no Windows o Git Bash) na pasta do projeto.</Text>
                  <Text>heroku config | grep CLEARDB_DATABASE_URL.</Text>
                  <Text>3.2 Com base nos dados da URL de conexão, monte o comando para executar o arquivo SQL no servidor:</Text>
                  <Text>mysql --host=us-cdbr-iron-east-05.cleardb.net --user=b8782e4e3f88f4 --password=b9748a8b
                  --reconnect heroku_71216a81091a2da arquivo.sql</Text>
                </View>

                <View break style={styles.section}>
                  <Text>Configuração e envio do projeto para produção:</Text>
                </View>

                <View style={styles.content}>
                  <Text>1 Obtenha a URL do banco de dados.</Text>
                  <Text>Acesse o terminal (no Windows o Git Bash) na pasta do projeto heroku config | grep CLEARDB_DATABASE_URL</Text>
                  <Text>2 Crie o arquivo application-prod.properties.</Text>
                  <Text>(troque pela URL do seu banco de dados):</Text>
                  <Text>spring.datasource.url=mysql://b2904110475a07:23511c2b@us-cdbr-iron-east05.cleardb.net/heroku_019b910edd32a2f?reconnect=true</Text>
                  <Text>spring.jpa.hibernate.ddl-auto=none</Text>
                  <Text>spring.jpa.show-sql=false</Text>
                  <Text>spring.jpa.properties.hibernate.format_sql=false</Text>
                  <Text>3 Crie o arquivo Procfile.</Text>
                  <Text>(troque pelo nome do seu projeto):</Text>
                  <Text>web: java -Dserver.port=$PORT -Dspring.profiles.active=prod $JAVA_OPTS -jar target/cursomc-0.0.1-SNAPSHOT.jar</Text>
                  <Text>Notas:</Text>
                  <Text>  - D serve para passar parâmetros ao Heroku.</Text>
                  <Text>  PORT é a variável em que o Heroku armazena a porta pela qual a API vai ser acessada.</Text>
                  <Text>  Para gerar o .jar do projeto:</Text>
                  <Text>  Window Preferences Installed JREs.</Text>
                  <Text>  Selecione o item existente e clique Edit.</Text>
                  <Text>  Clique Directory e selecione a pasta do JDK (não a do JRE), clique Finish.</Text>
                  <Text>  Clique Apply and Clone.</Text>
                  <Text>  Clique Project Clean.</Text>
                  <Text>Run As Maven Install (o banco de dados precisa estar online).</Text>
                  <Text>  Verifique o arquivo .jar gerado na pasta target.</Text>
                  <Text>  Envie o projeto para o Heroku.</Text>
                  <Text>  faça um novo commit com as alterações.</Text>
                  <Text>  git push heroku master.</Text>
                  <Text>Atenção: mesmo depois do processo finalizar no terminal, pode levar uns minutos para a API responder corretamente as requisições com acesso a dados.</Text>
                </View>
                <Text style={styles.links}>
                  <Link style={{ color: "#fff" }} src="https://facebook.com/naldo-luis-568">Go to Facebook</Link>
                </Text>
              </Page>
            </Document>
          </PDFViewer>
        </Card.Body>
      </Card.Header>
    </Card>
  )}