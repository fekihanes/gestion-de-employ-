<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PharIo\Manifest\Email;

class employee extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $fillable = ['name','email','phone','description'];
}
