/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension, gettext as _} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class FocusWindow extends Extension {
	_trackWindows() {
		let fs = global.display.focus_windows;
		if (fs) {
			console.log("Focused window: " + $(fs.get_title()));
		}
		else {
			console.log("No focused window");
		}
	}
    enable() {
		console.log("start");
		this._trackWindows();
		this._focusWindow = global.display.connect('notify::focus-window', () => {
			console.log("focus-window");
			let win= global.display.focus_window;
			if (win) {
				//let info = [
				//	`标题: ${window.get_title()}`,
				//	`应用: ${window.get_wm_class()}`,
				//	`PID: ${window.get_pid()}`
				//].join("\n");
				//console.log(info);
				console.log(win.get_pid());
				console.log(win.get_title());
				console.log(win.get_wm_class());
			}
			else {
				console.log("no focus_window");
			}
		});
    }

    disable() {
		console.log("disable");
    }

};

function init() {
	return new FocusWindow();
}
