#!/usr/bin/env python3
"""Import"""
from typing import Callable
"""Multiply floats"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def multiply(value: float) -> float:
        """Returns a function that multiplies a float"""
        return value * multiplier
    """return"""
    return multiply
