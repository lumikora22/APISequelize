import Project from '../models/ProjectSchema';
export const crearProject = async(req, res, next) => {
  const {name, priority, description, deliverydate} = req.body;
  try{
    let newProject = await Project.create({
      name,
      priority,
      description,
      deliverydate
    },{
      fields:['name','priority','description','deliverydate']
    });
  
    if(newProject){
      return res.json({
        message: 'Project create successfully',
        data: newProject
      });
    }
    res.send('recived')
  }catch(err){
    res.status(500).json({message: err.message + 'something wrong', data: {}});
  }
}