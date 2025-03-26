#!/bin/bash

rm -f *.zip
gnome-extensions pack .
rm -rf ~/.local/share/gnome-shell/extensions/gnome-shell-focus-window\@dingjingmaster
gnome-extensions install -f ./gnome-shell-focus-window@dingjingmaster.shell-extension.zip 
rm -f *.zip
