const PROJECTS = [
  {
    id: 1,
    title: 'Терапевтический корпус',
    start: '08.04.2019',
    end: '31.01.2021',
    manager: 'Денис Конев',
    admin: 'Гросолим Лимитед',
    stage: 'Строительство',
    category: 'Медицина'
  },
];


const tasks = (state = PROJECTS, {type, id, title, start, end, manager, admin, stage, category}) => {
  switch (type) {
    case 'ADD_TASK': 
      return [
        ...state, {
          id,
          title,
          start,
          end,
          manager,
          admin,
          stage,
          category
        }
      ]
    default:
      return state;
  }
}

export default tasks;