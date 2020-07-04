export const addProject = (id, title, start, end, manager, admin, stage, category) => ({
  type: 'ADD_PROJECT',
  id,
  title,
  start,
  end,
  manager,
  admin,
  stage,
  category
});
