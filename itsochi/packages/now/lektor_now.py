# -*- coding: utf-8 -*-
import datetime

from lektor.pluginsystem import Plugin


class NowPlugin(Plugin):
    name = 'now'
    description = 'Add your description here.'

    def on_setup_env(self, **extra):
        self.env.jinja_env.globals.update(
            get_now=datetime.datetime.utcnow
        )
