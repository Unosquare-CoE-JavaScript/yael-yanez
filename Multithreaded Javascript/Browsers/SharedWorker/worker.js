const browserInstances = [];
const tasks = [];

onconnect = function (evt) {
  const port = evt.ports[0];

  browserInstances.push(port);

  port.onmessage = function ({ data: task }) {
    tasks.push(task);

    browserInstances.forEach((instance) => {
      instance.postMessage(tasks);
    });
  };
};
