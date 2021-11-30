import autobind from '../decorators/autobind';
import { DragTarget } from '../model/drag-drop';
import { Project, ProjectStatus } from '../model/project';
import { projectState } from '../state/project';
import Component from './base';
import ProjectItem from './project-item';

class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  constructor(private type: ProjectStatus) {
    super(
      'project-list',
      'app',
      false,
      `${ProjectStatus[type].toLowerCase()}-projects`
    );

    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${ProjectStatus[this.type].toLowerCase()}-projects-list`
    )! as HTMLUListElement;

    listEl.innerHTML = '';

    for (const projectItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, projectItem);
    }
  }

  @autobind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();

      const listEl = this.element.querySelector('ul')!;
      listEl.classList.add('droppable');
    }
  }

  @autobind
  dropHandler(event: DragEvent) {
    const projectId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(projectId, this.type);
  }

  @autobind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector('ul')!;
    listEl.classList.remove('droppable');
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type === ProjectStatus.Active) {
          return project.status === ProjectStatus.Active;
        }

        return project.status === ProjectStatus.Finished;
      });

      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${ProjectStatus[this.type].toLowerCase()}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      ProjectStatus[this.type].toUpperCase() + ' PROJECTS';
  }
}

export default ProjectList;
