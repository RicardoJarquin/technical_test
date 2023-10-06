<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function index()
    {
        return Location::get()->toArray();
    }

    public function store(Request $request)
    {
        $location = new Location();
        $location->latitude = $request->latitude;
        $location->longitude = $request->longitude;
        $location->address = $request->address;
        $location->save();
        return $location->id;
    }
}
