/**
 * AuroraLauncher LauncherServer - Server for AuroraLauncher
 * Copyright (C) 2020 - 2021 AuroraTeam

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from "fs"
import { format } from "util"

import * as colors from "colors/safe"

import { StorageHelper } from "./StorageHelper"

export class LogHelper {
    static error(msg: any, ...args: any[]): void {
        this.log(LogLevel.ERROR, msg, ...args)
    }

    static info(msg: any, ...args: any[]): void {
        this.log(LogLevel.INFO, msg, ...args)
    }

    static raw(msg: any, ...args: any[]): void {
        this.log(LogLevel.RAW, msg, ...args)
    }

    static warn(msg: any, ...args: any[]): void {
        this.log(LogLevel.WARN, msg, ...args)
    }

    private static log(level: LogLevel, msg: any, ...args: any[]) {
        if (level === LogLevel.RAW) return this.rawLog(msg, ...args)

        const date = new Date()
            .toLocaleString("ru", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
            .replace(/-/g, ".")

        let coloredStr: string = colors.gray(date)
        switch (level) {
            case LogLevel.ERROR:
                coloredStr += colors.red(` [${level.toUpperCase()}] ${msg}`)
                break
            case LogLevel.INFO:
                coloredStr += colors.cyan(` [${level.toUpperCase()}] `) + msg
                break
            case LogLevel.WARN:
                coloredStr += colors.yellow(` [${level.toUpperCase()}] ${msg}`)
                break
        }
        this.rawLog(coloredStr, ...args)
    }

    /*
     * Заменил console.log на это
     * https://nodejs.org/api/util.html#util_util_format_format_args
     * Оно также обратно совместимо с console.log (те же подстановочные символы)
     */
    private static rawLog(msg: any, ...args: any[]) {
        const message = format(msg, ...args) + "\n"
        process.stdout.write(message)
        fs.appendFileSync(StorageHelper.logFile, colors.strip(message))
    }
}

enum LogLevel {
    ERROR = "error",
    INFO = "info",
    RAW = "raw",
    WARN = "warn",
}
