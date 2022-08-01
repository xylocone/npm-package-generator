import mock from "mock-fs";
import { join } from "path";

import { pathExists } from "../pathExists.js";

describe("pathExists", () => {
  beforeEach(() => {
    mock({
      "existing-file.file": "Some random contents",
      "existing-folder": {},
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it("should return false for non-existent path", async () => {
    expect(
      await pathExists(
        join(process.cwd(), `just-a-long-random-path-${Date.now()}`)
      )
    ).toBe(false);
  });

  it("should return true for a file that exists", async () => {
    expect(await pathExists(join(process.cwd(), "existing-file.file"))).toBe(
      true
    );
  });

  it("should return true for a folder that exists", async () => {
    expect(await pathExists(join(process.cwd(), "existing-folder"))).toBe(true);
  });
});
