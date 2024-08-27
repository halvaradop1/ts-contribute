# Github

## Work with events

In this section, you will learn about the triggers used to execute events with GitHub Actions. To run an event, you need to specify the trigger using the `on` keyword in the main line of your workflow file. In this section, you'll define the conditions under which you want the workflow to run. Some of the most commonly used triggers are:

-   `workflow_dispatch`
-   `push`
-   `pull_request`
-   `pull_request_review`

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
