'use strict';

export const instanceNotFound = (res, entity) => {
  return res
    .status(404)
    .json({
      error: `${entity} not found`,
    });
};

