import { ProjectStatus } from './model/project';
import ProjectInput from './components/project-input';
import ProjectList from './components/project-list';

new ProjectInput();
new ProjectList(ProjectStatus.Active);
new ProjectList(ProjectStatus.Finished);

console.log('kkasdasdnesadl');
