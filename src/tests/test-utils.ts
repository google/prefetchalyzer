/**
 * Copyright 2020 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 **/

import fs from 'fs'
import path from 'path'
import { JsonObject } from '../models/app-data'

export function loadTestObjectFromFile(fileName: string): JsonObject {
  const fileContent = fs.readFileSync(path.resolve(__dirname, `./data/${fileName}`)).toString()
  return JSON.parse(fileContent)
}
