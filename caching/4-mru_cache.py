#!/usr/bin/python3
"""MRU Caching"""

from collections import OrderedDict

BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """MRU Caching class"""

    def __init__(self):
        super().__init__()
        self.mru_order = OrderedDict()

    def put(self, key, item):
        """Assign to the dictionary the item value for the key"""
        if not key or not item:
            return
        self.cache_data[key] = item
        self.mru_order[key] = item
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            item_discarded = next(iter(self.mru_order))
            del self.cache_data[item_discarded]
            print("DISCARD:", item_discarded)
        if len(self.mru_order) > BaseCaching.MAX_ITEMS:
            self.mru_order.popitem(last=False)
        self.mru_order.move_to_end(key, False)

    def get(self, key):
        """Return the value in self.cache_data linked to key"""
        if key in self.cache_data:
            self.mru_order.move_to_end(key, False)
            return self.cache_data[key]
        return None
