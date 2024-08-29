# Github

## Work with events

In this section, you will learn about the triggers used to execute events with GitHub Actions. To run an event, you need to specify the trigger using the `on` keyword in the main line of your workflow file. In this section, you'll define the conditions under which you want the workflow to run. Some of the most commonly used triggers are:

- `workflow_dispatch`
- `push`
- `pull_request`
- `pull_request_review`

We will explore some of these triggers in the following sections, focusing on how to use them effectively and in which scenarios they can be advantageous.

### Run for one or more events

There are no limits to the number of triggers you can use in a single workflow, but it is recommended to use triggers that are related or have similar criteria. Each trigger has properties that allow you to specify more precisely when to execute the event. These properties include branches, branches-ignore, paths, paths-ignore, tags, and tags-ignore. These properties support regex expressions to define matching branches, directories, files, and tags that determine when the trigger should be activated.

```yaml
on:
  push:
    branches:
      - master
      - "chore/*"
    branches-ignore:
      - "fix/*"
      - "refactor/*"
    tags:
      - "v.x"
```

### Manual events

There is a trigger that allows us to run a workflow manually from the Actions section in our GitHub repository. This trigger is `workflow_dispatch`, which enables workflows with this property defined in their triggers to be run manually. The steps to execute a workflow manually are:

- Go to your GitHub repository.
- Navigate to the Actions section at the top of the UI.
- In the left sidebar, find the "All workflows" section, which contains the list of workflows for the repository.
- Select the desired workflow and click the "Run workflow" button.
- You have now manually triggered the workflow.

```yaml
on:
  workflow_dispatch: {}
```

## Components of a workflow

### Syntax

YAML files have a simple syntax where spacing should be set to 2 spaces, and tabs must be equivalent to spaces. The indentation and structure of a YAML file are determined by the indentation of each line relative to the columns. In other words, if multiple lines start at the same column, they are sibling properties. If a property has multiple sub-properties indented to the right by 2 spaces, this indicates encapsulation, meaning those sub-properties belong to the parent property and provide additional settings or configurations.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18.x"
```

### Use shell commands

You can execute any shell command in your workflow using the run property within the steps of your jobs. You can choose which shell to use—either Bash or PowerShell. By default, Bash is used.

```yaml
steps:
  - run: echo "Using shell commands in a step"
```

### Conditionals

Conditionals allows us to check if a step complet the required to be executed based in other thing, you can check if the event created matches with a pull_request or issue trigger or where does branch was create the pull request o more conditionals

```yaml
steps:
  deploy:
    needs: [test, build]
    if: github.ref == 'refs/heads/master' || github.event_name == 'pull_request'
```
