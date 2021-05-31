function validaEmail() {
  var mail = document.getElementById("email").value;
  var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!filter.test(document.getElementById("email").value)) {
    alert('Por favor, digite o email corretamente')
    document.getElementById("email").focus()
  }
  else {
    alert('Email enviado com sucesso !');
    document.getElementById("menu").innerHTML = '<div id="msg"> <h2> Bem vindo, ' + mail + '!</h2> <p>É com grande satisfação que recebemos você na Labenu_.</p><p>Muito mais que uma escola, somos uma mega rede de apoio e incentivo a educação tecnológica.</p><p> Queremos transformar pessoas, mesmo que sem nenhuma experiência com desenvolvimento,<br> em desenvolvedoras capazes de assumir qualquer desafio de início de carreira!</p> <div>';
  
  return false
}
}
