/* -*- Mode: C; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 * ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is WOFF font packaging code.
 *
 * The Initial Developer of the Original Code is Mozilla Corporation.
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Jonathan Kew <jfkthame@gmail.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#ifdef WIN32
#include <io.h>
#endif

#include "woff.h"

#include <QDebug>

static void
die(const char * msg)
{
  fprintf(stderr, "# fatal error: %s\n", msg);
  exit(2);
}

static void
reportErr(uint32_t status)
{
  woffPrintStatus(stderr, status, "### ");
  exit(status & 0xff);
}

static void
usage(const char * progName)
{
  fprintf(stderr, "Usage:\n"
                  "  %s [-v | -m | -p] <woff>\n"
                  "    decode WOFF file <woff>, writing OpenType data to stdout\n"
                  "Options (instead of decoding to OpenType format)\n"
                  "    -v   write font version to stdout\n"
                  "    -m   write WOFF metadata block to stdout\n"
                  "    -p   write private data block to stdout\n"
                  "Note: only one of -v, -m, -p may be used at a time.\n"
                  , progName);
}

const uint8_t *
readFile(const char * name, uint32_t * len)
{
  FILE * inFile = fopen(name, "rb");
  if (!inFile) {
    char buf[200];
    sprintf(buf, "unable to open file %s", name);
    die(buf);
  }

  if (fseek(inFile, 0, SEEK_END) != 0)
    die("seek failure");
  *len = ftell(inFile);
  if (fseek(inFile, 0, SEEK_SET) != 0)
    die("seek failure");

  uint8_t * data = (uint8_t *) malloc(*len);
  if (!data)
    die("malloc failure");
  if (fread(data, 1, *len, inFile) != *len)
    die("file read failure");
  fclose(inFile);

  return data;
}

#ifdef __cplusplus
bool convertWoffToOtf(const QString& input, const QString& output) {
	uint32_t status = eWOFF_ok;

	uint32_t woffLen;
	const uint8_t * woffData = readFile(input.toStdString().c_str(), &woffLen);

	uint32_t len;
	const uint8_t * data;

	{
		data = woffDecode(woffData, woffLen, &len, &status);
		if (WOFF_FAILURE(status)) {
			reportErr(status);
		}
		if (data) {
			FILE* file = fopen(output.toStdString().c_str(), "wb");
			if (fwrite(data, 1, len, file) != len) {
				qDebug() << ("error writing sfnt data to output");
				free((void *) woffData);
				return false;
			}
			fclose(file);
			free((void *) data);
		} else {
			qDebug() << ("unable to decode WOFF data");
			free((void *) data);
			free((void *) woffData);
			return false;
		}
	}

	//if (WOFF_WARNING(status)) {
	//	woffPrintStatus(stderr, status, "### ");
	//}

	free((void *) woffData);
	return true;
}
#endif