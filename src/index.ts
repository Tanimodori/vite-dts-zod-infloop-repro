import { z } from "zod";

export default {
  foo: z.object({
    bar: z.string(),
  }),
};
