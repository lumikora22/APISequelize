import Sequelize from 'sequelize';
import { db } from '../database/database';
import Task from './TaskSchema';

const Project = db.define('projects',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name:{
    type: Sequelize.TEXT,
  },
  priority:{
    type: Sequelize.INTEGER
  },
  description:{
    type: Sequelize.TEXT,
  },
  deliverydate:{
    type: Sequelize.DATE,
  }
},{
  timestamps: false
});

Project.hasMany(Task, { foreignKey: 'projectId', sourceKey: 'id'});
Task.belongsTo(Project, { foreignKey: 'projectId', sourceKey: 'id'});

export default Project;