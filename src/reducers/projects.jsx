const PROJECTS = [
  {
    id: 1,
    title: 'Терапевтический корпус',
    start: '08.04.2019',
    end: '31.01.2021',
    manager: 'Денис Конев',
    admin: 'Гросолим Лимитед',
    stage: 'Строится',
    category: 'Медицина'
  },
  {
    id: 2,
    title: 'Терапевтический корпус',
    start: '08.04.2019',
    end: '31.01.2021',
    manager: 'Денис Конев',
    admin: 'Гросолим Лимитед',
    stage: 'Строится',
    category: 'Медицина'
  },
  {
    id: 3,
    title: 'Терапевтический корпус',
    start: '08.04.2019',
    end: '31.01.2021',
    manager: 'Денис Конев',
    admin: 'Гросолим Лимитед',
    stage: 'Строится',
    category: 'Медицина'
  },
  {
    id: 4,
    title: 'Терапевтический корпус',
    start: '08.04.2019',
    end: '31.01.2021',
    manager: 'Денис Конев',
    admin: 'Гросолим Лимитед',
    stage: 'Строится',
    category: 'Медицина'
  }
];


const projects = (state = PROJECTS, {type, id, title, start, end, manager, admin, stage, category}) => {
  switch (type) {
    case 'ADD_PROJECT': 
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

export default projects;