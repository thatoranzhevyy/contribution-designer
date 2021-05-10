# Contribution Designer

Contribution Designer - a script for creating any picture of the activity of a user profile on GitHub.


# How it works

The current (intentional?) Behavior of GitHub is used when building the activity graph, taking into account the _local commit dates_ provided by the client. You can learn more about this topic in the [service's help](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/).

The program recognizes three color gradations:
  * lack of shade - no activity on a given day
  * light shade - average activity on a given day
  * dark shade - high activity on a given day

See the file [index.ts] (src/index.ts) for all the necessary settings: picture data and repository address.
