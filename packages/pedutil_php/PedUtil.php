<?php

class PedUtil
{
	function write($objIn)
	{
		$listObjOut = [];

		foreach ($objIn as $key => $value) {
			$listObjOut[] = [
				'key' => $key,
				'value' => $value
			];
		}

		return $listObjOut;
	}

	function read($listObjOut)
	{
		$objOut = [];

		foreach ($listObjOut as $key => $value) {
			$objOut[$key] = $value;
		}

		return $objOut;
	}
}

$pedutil = new PedUtil();
