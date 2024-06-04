import { useState } from 'react'
import {ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './components/styles'

export default function App() {
  const [emailField, setEmailField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')
  const [password2Field, setPassword2Field] = useState<string>('')
  const [cepField, setCEPField] = useState<string>('')
  const [nomeField, setNomeField] = useState<string>('')
  const [paginaLogin, setPaginaLogin] = useState('1')
  const [paginaInicial, setPaginaInicial] = useState('0')
  const [paginaSenha, setPaginaSenha] = useState('0')
  const [paginaCadastro, setPaginaCadastro] = useState('0')
   const handleForgotButton = () => {
    alert(emailField)
    alert(passwordField)
    setPaginaLogin('0')
    setPaginaInicial('1')
  }

  const handleSignUpButton = () => {
    setPaginaLogin('0')
    setPaginaCadastro('1')

  }

  return (
    <ScrollView style={styles.scrollView}>,
    {paginaLogin == '1' &&
    <>

      <View style={styles.container}>
        <Image style={styles.logo} source={require('./nubank-logo-branco.png')}/>

        <Text style={styles.h2}>Bem Vindo(a)! Faça seu login</Text>
      
        <View style={styles.inputArea}>
          <TextInput 
            style={styles.inputField} 
            placeholder='Email'
            placeholderTextColor='#9400D3'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>  

        <View style={styles.inputArea}>

          <TextInput 
            style={styles.inputField} 
            placeholder='Senha' 
            placeholderTextColor='#9400D3'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        
        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
            <Text style={styles.forgotBtnText}>Esqueci Minha Senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUpButton}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Ainda não sou Cliente! </Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se agora</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por ingrid oliveira</Text>
        </View>
      </View>

      </>
    }
    {paginaInicial == '1' &&
    <>
      <View style={styles.container}>
    
      </View>
    </>
    }
    {paginaSenha == '1' &&
    <>
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Digite Sua Nova Senha Aqui</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite sua senha' 
            placeholderTextColor='#9400D3'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
      </View>
         <View style={styles.inputArea}>

          <Text style={styles.inputLabel}>Confirme Sua Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Confirmar' 
            placeholderTextColor='#9400D3'
            value={password2Field}
            onChangeText={t => setPassword2Field(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button2} onPress={handleSignUpButton}>
          <Text style={styles.button2Text}>Redefinir</Text>
        </TouchableOpacity>
  
      </View>
    </>
    }
     {paginaCadastro == '1' &&
    <>
      <View style={styles.container}>
        <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Nome Completo</Text>
          <TextInput 
            style={styles.inputField} 

            placeholder='Digite seu nome completo' 
            placeholderTextColor='#9400D3'
            value={nomeField}
            onChangeText={t => setNomeField(t)}
            autoCapitalize='none'
            keyboardType='default'
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu email' 
            placeholderTextColor='#9400D3'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>
         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite sua senha' 
            placeholderTextColor='#9400D3'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button2} onPress={handleSignUpButton}>
          <Text style={styles.button2Text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
}
    
    </ScrollView>
  )

}
