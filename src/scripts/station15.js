async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList).then()
  return await result
}

async function test(test) {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return test.map(buildFullName);
}

function buildFullName(data) {
  // Station14の問題はこちらです。想定する答えをここを書いてください。
  // 氏名がわかるようにしつつ、半角スペースで繋いでください。
  // またtest配列のそれぞれのオブジェクトに対して、full_nameのプロパティが追加されるように実装すること
  //return ({first_name,family_name}) => ({["full_name"]:family_name+" "+first_name})
  return {full_name :data["family_name"]+" "+data["first_name"]};
}