const PROJECTS = [
  {
    id: 1,
    title: 'Терапевтический корпус',
    start: '08.04.2019',
    end: '31.01.2021',
    manager: 'Денис Конев',
    admin: 'Гросолим Лимитед',
  }
];


const projects = (state = PROJECTS, {type, id, title, start, end, manager, admin}) => {
  switch (type) {
    case 'ADD_PROJECT': 
      return [
        ...state, {
          id,
          title,
          start,
          end,
          manager,
          admin
        }
      ]
    default:
      return state;
  }
}

export default projects;